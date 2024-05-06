const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  function isValidCell(row, col, id) {
    return (
      row >= 0 &&
      row < m &&
      col >= 0 &&
      col < n &&
      grid[row][col] &&
      !visited.has(id)
    )
  }
  const m = grid.length,
    n = grid[0].length,
    visited = new Set(),
    stack = []
  let maxArea = 0
  for (let startRow = 0; startRow < m; startRow++) {
    for (let startCol = 0; startCol < n; startCol++) {
      const startId = startRow * n + startCol
      // Visit each not visited 1
      if (isValidCell(startRow, startCol, startId)) {
        // Calculate current island area
        let area = 0
        visited.add(startId)
        stack.push([startRow, startCol])
        while (stack.length) {
          const [row, col] = stack.pop()
          // Visit all neighbors
          for (const [dy, dx] of DIRS) {
            const nextRow = row + dy,
              nextCol = col + dx,
              nextId = nextRow * n + nextCol
            if (isValidCell(nextRow, nextCol, nextId)) {
              visited.add(nextId)
              stack.push([nextRow, nextCol])
            }
          }
          area++
        }
        maxArea = Math.max(maxArea, area)
      }
    }
  }
  return maxArea
}
