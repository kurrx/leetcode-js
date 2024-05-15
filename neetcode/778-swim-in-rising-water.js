const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]
/**
 * @param {number[][]} grid
 * @return {number}
 */
function swimInWater(grid) {
  function canReach(t) {
    function canVisit(t, r, c, id) {
      return (
        r >= 0 &&
        r < n &&
        c >= 0 &&
        c < n &&
        !visited.has(id) &&
        grid[r][c] <= t
      )
    }
    if (grid[0][0] > t) return false
    const visited = new Set([0]),
      queue = [[0, 0]]
    while (queue.length) {
      const length = queue.length
      for (let i = 0; i < length; i++) {
        const [r, c] = queue.shift()
        for (const [dy, dx] of DIRS) {
          const nextR = r + dy,
            nextC = c + dx,
            nextId = nextR * n + nextC
          if (canVisit(t, nextR, nextC, nextId)) {
            if (nextR === n - 1 && nextC === n - 1) return true
            visited.add(nextId)
            queue.push([nextR, nextC])
          }
        }
      }
    }
    return false
  }

  const n = grid.length
  if (n === 1) return grid[0][0]

  let left = 0,
    right = n * n - 1
  while (left <= right) {
    const t = Math.floor((left + right) / 2)
    if (canReach(t)) right = t - 1
    else left = t + 1
  }
  return left
}
