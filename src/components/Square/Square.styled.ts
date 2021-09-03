import styled from 'styled-components'

interface SquareProps {
  isBlack: boolean
}

export const Square = styled.div<SquareProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ isBlack }) => isBlack ? 'black' : 'white'};
`
