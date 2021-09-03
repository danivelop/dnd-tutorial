import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { PositionDispatcher } from 'contexts/positionContext'
import { canMoveKnight } from 'utils/positionUtils'
import Square from 'components/Square'
import Knight, { KNIGHT_TYPE } from 'components/Knight'
import * as Styled from './BoardSquare.styled'

interface BoardSquareProps {
  x: number
  y: number
  currentX: number
  currentY: number
}

function BoardSquare({
  x,
  y,
  currentX,
  currentY,
}: BoardSquareProps) {
  const isSquareBlack = (x + y) % 2 === 1

  const setPosition = useContext(PositionDispatcher)

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: KNIGHT_TYPE,
    canDrop: () => canMoveKnight(x, y, currentX, currentY),
    drop: () => {
      if (setPosition) {
        setPosition([x, y])
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }), [
    x,
    y,
    currentX,
    currentY,
    setPosition,
  ])

  return (
    <Styled.BoardSquare ref={drop}>
      <Square isBlack={isSquareBlack}>
        {(x === currentX && y === currentY) && <Knight isBlack={!isSquareBlack} />}
      </Square>
      { (isOver || canDrop) && <Styled.Background isOver={isOver} canDrop={canDrop} />}
    </Styled.BoardSquare>
  )
}

export default BoardSquare
