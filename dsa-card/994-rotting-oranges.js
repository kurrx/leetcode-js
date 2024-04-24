const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * https://leetcode.com/problems/rotting-oranges
 *
 * TC: O(n*m)
 * SC: O(n*m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const m = grid.length,
    n = grid[0].length,
    queue = [],
    rotted = new Set()

  let fresh = 0
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const orange = grid[r][c]
      if (orange === 2) {
        rotted.add(r * n + c)
        queue.push([r, c])
      } else if (orange === 1) {
        fresh++
      }
    }
  }
  if (!fresh) return 0

  let time = 1
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [r, c] = queue.shift()
      for (const [dy, dx] of DIRS) {
        const nextR = r + dy,
          nextC = c + dx
        if (nextR < 0 || nextC < 0 || nextR >= m || nextC >= n) {
          continue
        }
        const number = nextR * n + nextC
        if (grid[nextR][nextC] === 1 && !rotted.has(number)) {
          rotted.add(number)
          queue.push([nextR, nextC])
          fresh--
          if (!fresh) return time
        }
      }
    }
    time++
  }
  return -1
}
