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
function maxDistance(grid) {
  function canVisit(r, c, id) {
    return r >= 0 && c >= 0 && r < n && c < n && !grid[r][c] && !visited.has(id)
  }

  const n = grid.length
  const queue = [],
    visited = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        queue.push([i, j, 0])
        visited.add(i * n + j)
      }
    }
  }

  let max = -1
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [r, c, dist] = queue.shift()
      for (const [dy, dx] of DIRS) {
        const nextR = r + dy,
          nextC = c + dx,
          nextId = nextR * n + nextC
        if (canVisit(nextR, nextC, nextId)) {
          max = Math.max(max, dist + 1)
          queue.push([nextR, nextC, dist + 1])
          visited.add(nextId)
        }
      }
    }
  }
  return max
}
