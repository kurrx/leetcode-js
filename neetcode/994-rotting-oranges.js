/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  function isFreshOrange(row, col) {
    return row >= 0 && row < n && col >= 0 && col < m && grid[row][col] === 1
  }
  const n = grid.length,
    m = grid[0].length,
    queue = [],
    converted = new Set()
  let fresh = 0,
    time = 0
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      // If orange is rotten add to the queue
      if (grid[row][col] === 2) {
        queue.push([row, col])
      } else if (grid[row][col] === 1) {
        fresh++
      }
    }
  }
  if (!fresh) return 0
  while (queue.length) {
    if (converted.size === fresh) return time
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [row, col] = queue.shift()
      for (const [dy, dx] of DIRS) {
        const nextRow = row + dy,
          nextCol = col + dx,
          id = nextRow * m + nextCol
        if (isFreshOrange(nextRow, nextCol) && !converted.has(id)) {
          converted.add(id)
          queue.push([nextRow, nextCol])
        }
      }
    }
    time++
  }
  return -1
}
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
