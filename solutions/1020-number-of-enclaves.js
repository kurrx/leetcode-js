const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * https://leetcode.com/problems/number-of-enclaves
 *
 * TC: O(n*m)
 * SC: O(n*m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function numEnclaves(grid) {
  function dfs(r, c) {
    for (const [dy, dx] of DIRS) {
      const nextR = r + dy,
        nextC = c + dx
      if (nextR < 0 || nextC < 0) continue
      if (nextR >= m || nextC >= n) continue
      const number = nextR * n + nextC
      if (grid[nextR][nextC] && !seen.has(number)) {
        seen.add(number)
        dfs(nextR, nextC)
      }
    }
  }
  const m = grid.length,
    n = grid[0].length,
    seen = new Set()

  let ones = 0
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c]) ones++
    }
  }

  for (let dir = 0; dir < 4; dir++) {
    const horizontal = dir === 0 || dir === 1,
      to = horizontal ? n : m,
      j = dir % 2 === 0 ? 0 : horizontal ? m - 1 : n - 1
    for (let i = 0; i < to; i++) {
      const [r, c] = horizontal ? [j, i] : [i, j],
        number = r * n + c
      if (grid[r][c] && !seen.has(number)) {
        seen.add(number)
        dfs(r, c)
      }
    }
  }

  return ones - seen.size
}
