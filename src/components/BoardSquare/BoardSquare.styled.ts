import styled, { css } from 'styled-components'

interface BackgroundProps {
  isOver: boolean
  canDrop: boolean
}

function getBackgroundColor({ isOver, canDrop }: BackgroundProps) {
  if (isOver && !canDrop) {
    return css`background-color: red;`
  }

  if (!isOver && canDrop) {
    return css`background-color: yellow;`
  }

  if (isOver && canDrop) {
    return css`background-color: green;`
  }

  return ''
}

export const BoardSquare = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;

  ${getBackgroundColor}
`
