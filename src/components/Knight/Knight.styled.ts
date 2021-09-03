import styled from 'styled-components'

interface KnightProps {
  isBlack: boolean
  isDragging: boolean
}

export const Knight = styled.div<KnightProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 100px;
  font-weight: bold;
  color: ${({ isBlack }) => isBlack ? 'black' : 'white'};
  cursor: move;

  opacity: ${({ isDragging }) => isDragging ? '0.5' : '1'};
`
