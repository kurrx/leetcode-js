/**
 * https://leetcode.com/problems/unique-paths-iii
 *
 * TC: O(3^N)
 * SC: O(N)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function uniquePathsIII(grid) {
  function isValid(r, c) {
    return r >= 0 && r < m && c >= 0 && c < n
  }
  function backtrack(r, c, visited = 1) {
    if (grid[r][c] === 2) {
      if (visited === mustVisit) paths++
      return
    }
    const value = grid[r][c]
    grid[r][c] = -1
    for (const [dy, dx] of DIRS) {
      const nextR = r + dy,
        nextC = c + dx
      if (!isValid(nextR, nextC) || grid[nextR][nextC] === -1) continue
      backtrack(nextR, nextC, visited + 1)
    }
    grid[r][c] = value
  }

  const m = grid.length,
    n = grid[0].length
  let startR,
    startC,
    mustVisit = 0,
    paths = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const value = grid[i][j]
      if (value >= 0) {
        mustVisit++
        if (value === 1) {
          startR = i
          startC = j
        }
      }
    }
  }
  backtrack(startR, startC)
  return paths
}
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
