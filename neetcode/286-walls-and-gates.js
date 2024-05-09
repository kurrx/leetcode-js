const Cell = {
  OBSTACLE: -1,
  GATE: 0,
  EMPTY: 2 ** 31 - 1,
}
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms) {
  function isValid(row, col) {
    return (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      rooms[row][col] === Cell.EMPTY
    )
  }
  const rows = rooms.length,
    cols = rooms[0].length
  const queue = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rooms[row][col] === Cell.GATE) {
        queue.push([row, col, 0])
      }
    }
  }
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [row, col, steps] = queue.shift()
      for (const [dy, dx] of DIRS) {
        const nextRow = row + dy,
          nextCol = col + dx
        if (isValid(nextRow, nextCol)) {
          rooms[nextRow][nextCol] = steps + 1
          queue.push([nextRow, nextCol, steps + 1])
        }
      }
    }
  }
}
