import React from 'react'
import { useDrag } from 'react-dnd'

import * as Styled from './Knight.styled'

interface KnightProps {
  isBlack: boolean
}

export const KNIGHT_TYPE = 'knight'

function Knight({ isBlack }: KnightProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: KNIGHT_TYPE,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }), [])

  return (
    <Styled.Knight
      ref={drag}
      isBlack={isBlack}
      isDragging={isDragging}
    >
      ♘
    </Styled.Knight>
  )
}

export default Knight
