const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {number[][]} heights
 * @return {number}
 */
function minimumEffortPath(heights) {
  function canVisit(r, c, nextR, nextC, nextID, visited, k) {
    return (
      nextR >= 0 &&
      nextR < rows &&
      nextC >= 0 &&
      nextC < cols &&
      !visited.has(nextID) &&
      Math.abs(heights[r][c] - heights[nextR][nextC]) <= k
    )
  }
  function dfs(k) {
    const visited = new Set([0]),
      stack = [[0, 0]]
    while (stack.length) {
      const [r, c] = stack.pop()
      if (r === rows - 1 && c === cols - 1) {
        return true
      }
      for (const [dy, dx] of DIRS) {
        const nextR = r + dy,
          nextC = c + dx,
          nextID = nextR * cols + nextC
        if (canVisit(r, c, nextR, nextC, nextID, visited, k)) {
          visited.add(nextID)
          stack.push([nextR, nextC])
        }
      }
    }
    return false
  }
  const rows = heights.length,
    cols = heights[0].length
  let left = 0,
    right = 1000000,
    result = right
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (dfs(mid)) {
      result = Math.min(result, mid)
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return result
}
