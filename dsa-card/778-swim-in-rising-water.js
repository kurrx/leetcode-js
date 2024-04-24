/**
 * https://leetcode.com/problems/swim-in-rising-water
 *
 * TC: O(n^2*log(k))
 * SC: O(n^2)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function swimInWater(grid) {
  const n = grid.length
  let left = 0,
    right = n * n - 1
  while (left < right) {
    const time = Math.floor((left + right) / 2)
    if (canReachEnd(time, n, grid)) right = time
    else left = time + 1
  }
  return left
}

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {number} time
 * @param {number} n
 * @param {number[][]} grid
 * @returns {boolean}
 */
function canReachEnd(time, n, grid) {
  if (grid[0][0] > time) return false
  const stack = [[0, 0]],
    visited = new Set([grid[0][0]])
  while (stack.length) {
    const [r, c] = stack.pop()
    for (const [dy, dx] of DIRS) {
      const nextR = r + dy,
        nextC = c + dx
      if (!isValid(nextR, nextC, n)) continue
      const cell = grid[nextR][nextC]
      if (visited.has(cell) || cell > time) continue
      if (nextR === n - 1 && nextC === n - 1) return true
      stack.push([nextR, nextC])
      visited.add(cell)
    }
  }
  return false
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} n
 * @returns {boolean}
 */
function isValid(row, col, n) {
  return row >= 0 && row < n && col >= 0 && col < n
}
