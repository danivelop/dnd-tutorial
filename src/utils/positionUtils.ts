export function canMoveKnight(toX: number, toY: number, currentX: number, currentY: number) {
  const dx = toX - currentX
  const dy = toY - currentY

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}