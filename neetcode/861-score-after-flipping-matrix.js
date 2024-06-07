/**
 * @param {number[][]} grid
 * @return {number}
 */
function matrixScore(grid) {
  const rows = grid.length,
    cols = grid[0].length,
    maxPossible = Math.pow(2, cols)
  const counter = new Array(cols),
    numbers = new Array(rows)
  for (let r = 0; r < rows; r++) {
    numbers[r] = 0
    const isRowFlip = grid[r][0] === 0
    for (let c = 0; c < cols; c++) {
      const bit = isRowFlip ? 1 - grid[r][c] : grid[r][c]
      numbers[r] = (numbers[r] << 1) ^ bit
      if (bit) {
        counter[c] = (counter[c] ?? 0) + 1
      }
    }
  }
  for (let c = 0; c < cols; c++) {
    if ((counter[c] ?? 0) >= rows - (counter[c] ?? 0)) continue
    const bit = 1 << (cols - c - 1)
    for (let r = 0; r < rows; r++) {
      numbers[r] ^= bit
    }
  }
  return numbers.reduce((a, b) => a + b, 0)
}
