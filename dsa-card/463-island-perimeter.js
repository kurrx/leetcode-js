const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * https://leetcode.com/problems/island-perimeter
 *
 * TC: O(n*m)
 * SC: O(1)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  const n = grid.length,
    m = grid[0].length

  let perimeter = 0
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (!grid[r][c]) continue
      for (const [dy, dx] of DIRS) {
        const nextR = r + dy,
          nextC = c + dx
        if (nextR < 0 || nextC < 0 || nextR >= n || nextC >= m) {
          perimeter++
          continue
        }
        if (!grid[nextR][nextC]) {
          perimeter++
        }
      }
    }
  }

  return perimeter
}
