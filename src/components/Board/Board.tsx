import React, { useMemo } from 'react'
import { DndProvider } from 'react-dnd'
import {HTML5Backend } from 'react-dnd-html5-backend'

import BoardSquare from 'components/BoardSquare'
import * as Styled from './Board.styled'

interface BoardProps {
  position: Array<number>
}

function Board({ position: [currentX, currentY] }: BoardProps) {
  const squares = useMemo(() => (
    new Array(64).fill(0).map((_, index) => {
      const x = index % 8
      const y = Math.floor(index / 8)

      return (
        <Styled.SquareWrapper key={index}>
          <BoardSquare
            x={x}
            y={y}
            currentX={currentX}
            currentY={currentY}
          />
        </Styled.SquareWrapper>
      )
    })
  ), [
    currentX,
    currentY,
  ])

  return (
    <DndProvider backend={HTML5Backend}>
      <Styled.Board>
        {squares}
      </Styled.Board>
    </DndProvider>
  )
}

export default Board
