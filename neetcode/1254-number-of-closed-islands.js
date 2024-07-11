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
function closedIsland(grid) {
  function isEdge(r, c) {
    return r === 0 || r === rows - 1 || c === 0 || c === cols - 1
  }
  function canVisit(r, c, id) {
    return (
      r >= 0 &&
      r < rows &&
      c >= 0 &&
      c < cols &&
      grid[r][c] === 0 &&
      !visited.has(id)
    )
  }
  function isClosed(r, c) {
    let closed = true
    visited.add(r * cols + c)
    const stack = [[r, c]]
    while (stack.length) {
      const [r, c] = stack.pop()
      if (closed && isEdge(r, c)) closed = false
      for (const [dy, dx] of DIRS) {
        const nextR = r + dy,
          nextC = c + dx,
          nextID = nextR * cols + nextC
        if (canVisit(nextR, nextC, nextID)) {
          visited.add(nextID)
          stack.push([nextR, nextC])
        }
      }
    }
    return closed
  }
  const rows = grid.length,
    cols = grid[0].length,
    visited = new Set()
  let answer = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 || visited.has(r * cols + c) || !isClosed(r, c))
        continue
      answer++
    }
  }
  return answer
}
