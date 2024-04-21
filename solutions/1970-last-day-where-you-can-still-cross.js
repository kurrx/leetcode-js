/**
 * https://leetcode.com/problems/last-day-where-you-can-still-cross
 *
 * TC: O(n*m*log(n*m))
 * SC: O(n*m)
 *
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
function latestDayToCross(row, col, cells) {
  const grid = new Array(row)
  for (let i = 0; i < cells.length; i++) {
    const r = cells[i][0] - 1
    if (!grid[r]) grid[r] = new Array(col)
    grid[r][cells[i][1] - 1] = i + 1
  }

  let left = 0,
    right = cells.length - 1
  while (left <= right) {
    const day = Math.floor((left + right) / 2)
    if (canReachBottom(day, grid, row, col)) left = day + 1
    else right = day - 1
  }
  return right
}

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {number} day
 * @param {number[][]} grid
 * @param {number} n
 * @param {number} m
 * @returns {boolean}
 */
function canReachBottom(day, grid, n, m) {
  const stack = [],
    visited = new Set()
  for (let col = 0; col < m; col++) {
    if (day < grid[0][col]) {
      visited.add(col)
      stack.push([0, col])
    }
  }
  while (stack.length) {
    const [r, c] = stack.pop()
    for (const [dy, dx] of DIRS) {
      const nextR = r + dy,
        nextC = c + dx,
        id = nextR * m + nextC
      if (
        !isValid(nextR, nextC, n, m) ||
        visited.has(id) ||
        day >= grid[nextR][nextC]
      )
        continue
      if (nextR === n - 1) return true
      stack.push([nextR, nextC])
      visited.add(id)
    }
  }
  return false
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} n
 * @param {number} m
 * @returns {boolean}
 */
function isValid(row, col, n, m) {
  return row >= 0 && row < n && col >= 0 && col < m
}
