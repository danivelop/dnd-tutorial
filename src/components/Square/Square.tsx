import React from 'react'

import * as Styled from './Square.styled'

interface SquareProps {
  isBlack: boolean
  children: React.ReactNode
}

function Square({ isBlack, children }: SquareProps) {
  return (
    <Styled.Square isBlack={isBlack}>
      {children}
    </Styled.Square>
  )
}

export default Square
