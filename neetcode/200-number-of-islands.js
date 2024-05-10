const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  function isValid(row, col, id) {
    return (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      !visited.has(id) &&
      grid[row][col] === '1'
    )
  }
  const rows = grid.length,
    cols = grid[0].length,
    visited = new Set(),
    stack = []
  let islands = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const id = row * cols + col
      if (!isValid(row, col, id)) continue
      visited.add(id)
      stack.push([row, col])
      while (stack.length) {
        const [currRow, currCol] = stack.pop()
        for (const [dy, dx] of DIRS) {
          const nextRow = currRow + dy,
            nextCol = currCol + dx,
            nextId = nextRow * cols + nextCol
          if (!isValid(nextRow, nextCol, nextId)) continue
          visited.add(nextId)
          stack.push([nextRow, nextCol])
        }
      }
      islands++
    }
  }
  return islands
}
