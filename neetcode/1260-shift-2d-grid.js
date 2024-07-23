/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid, k) {
  const m = grid.length,
    n = grid[0].length,
    newGrid = new Array(m)
  for (let i = 0; i < m; i++) newGrid[i] = new Array(n)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const nextId = i * n + j + k
      newGrid[Math.floor(nextId / n) % m][nextId % n] = grid[i][j]
    }
  }
  return newGrid
}
