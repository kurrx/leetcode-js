const DIR = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * https://leetcode.com/problems/max-area-of-island
 *
 * TC: O(m*n)
 * SC: O(m*n)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  const m = grid.length,
    n = grid[0].length
  let maxArea = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j]) continue
      let area = 0

      grid[i][j] = 0
      const stack = [[i, j]]
      while (stack.length) {
        area++
        const [r, c] = stack.pop()
        for (const [dy, dx] of DIR) {
          const nextR = r + dy,
            nextC = c + dx
          if (canEnter(nextR, nextC, grid)) {
            grid[nextR][nextC] = 0
            stack.push([nextR, nextC])
          }
        }
      }

      maxArea = Math.max(maxArea, area)
    }
  }
  return maxArea
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} grid
 */
function canEnter(row, col, grid) {
  if (row < 0 || row >= grid.length) return false
  if (col < 0 || col >= grid[0].length) return false
  return grid[row][col] === 1
}
