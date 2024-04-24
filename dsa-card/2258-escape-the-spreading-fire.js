/**
 * https://leetcode.com/problems/escape-the-spreading-fire
 *
 * TC: O(n*m*log(n*m))
 * SC: O(n*m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
function maximumMinutes(grid) {
  const m = grid.length,
    n = grid[0].length,
    [timeline, maxTime] = buildTimeline(grid, m, n)
  let left = 0,
    right = maxTime
  while (left <= right) {
    const time = Math.floor((left + right) / 2)
    if (canReachSafely(time, timeline, m, n)) left = time + 1
    else right = time - 1
  }
  return right === maxTime ? 10 ** 9 : right
}

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

/**
 * @param {number} time
 * @param {number[][]} timeline
 * @param {number} m
 * @param {number} n
 * @returns {boolean}
 */
function canReachSafely(time, timeline, m, n) {
  if (timeline[0][0] >= 0 && time >= timeline[0][0]) return false
  let currTime = time
  const queue = [[0, 0]],
    visited = new Set([0])
  while (queue.length) {
    currTime++
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [r, c] = queue.shift()
      for (const [dy, dx] of DIRS) {
        const nextR = r + dy,
          nextC = c + dx,
          id = nextR * n + nextC
        if (!isValid(nextR, nextC, m, n) || visited.has(id)) continue
        const cell = timeline[nextR][nextC]
        if (cell === -1 || (cell >= 0 && currTime >= cell)) continue
        if (nextR === m - 1 && nextC === n - 1) return true
        queue.push([nextR, nextC])
        visited.add(id)
      }
    }
  }
  return false
}

/**
 * @param {number[][]} grid
 * @param {number} m
 * @param {number} n
 * @returns {[number[][], number]}
 */
function buildTimeline(grid, m, n) {
  const timeline = new Array(m),
    queue = []
  for (let r = 0; r < m; r++) {
    timeline[r] = new Array(n)
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) {
        timeline[r][c] = -2
      } else if (grid[r][c] === 2) {
        timeline[r][c] = -1
      } else {
        timeline[r][c] = 0
        queue.push([r, c])
      }
    }
  }

  let time = 1
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [r, c] = queue.shift()
      for (const [dy, dx] of DIRS) {
        const nextR = r + dy,
          nextC = c + dx
        if (!isValid(nextR, nextC, m, n)) continue
        if (timeline[nextR][nextC] !== -2) continue
        timeline[nextR][nextC] = time
        queue.push([nextR, nextC])
      }
    }
    time++
  }

  if (timeline[m - 1][n - 1] >= 0) {
    timeline[m - 1][n - 1]++
  }

  return [timeline, time + 1]
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} m
 * @param {number} n
 * @returns {boolean}
 */
function isValid(row, col, m, n) {
  return row >= 0 && row < m && col >= 0 && col < n
}
