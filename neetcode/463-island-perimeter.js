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
function islandPerimeter(grid) {
  function canIncludeSide(r, c) {
    return r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0
  }
  function dfs(r, c) {
    const stack = [[r, c]],
      visited = new Set([r * cols + c])
    let perimeter = 0
    while (stack.length) {
      const [currR, currC] = stack.pop()
      for (const [dy, dx] of DIRS) {
        const nextR = currR + dy,
          nextC = currC + dx,
          nextId = nextR * cols + nextC
        if (canIncludeSide(nextR, nextC)) {
          perimeter++
          continue
        }
        if (!visited.has(nextId)) {
          visited.add(nextId)
          stack.push([nextR, nextC])
        }
      }
    }
    return perimeter
  }

  const rows = grid.length
  const cols = grid[0].length
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c]) {
        return dfs(r, c)
      }
    }
  }
  return 0
}
