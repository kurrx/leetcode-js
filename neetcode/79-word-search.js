const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  function markVisited(id) {
    visited |= 1 << id
  }
  function markUnvisited(id) {
    visited ^= 1 << id
  }
  function isVisited(id) {
    return visited & (1 << id)
  }
  function canVisitCell(row, col, id, i) {
    return (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      !isVisited(id) &&
      board[row][col] === word[i]
    )
  }
  function isExists(row, col, i) {
    if (i >= wordLen) return true
    for (const [dy, dx] of DIRS) {
      const nextRow = row + dy,
        nextCol = col + dx,
        nextId = nextRow * cols + nextCol
      if (canVisitCell(nextRow, nextCol, nextId, i)) {
        markVisited(nextId)
        if (isExists(nextRow, nextCol, i + 1)) return true
        markUnvisited(nextId)
      }
    }
    return false
  }

  const rows = board.length,
    cols = board[0].length,
    wordLen = word.length
  if (rows * cols < wordLen) return false
  let visited = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Start searching from every cell which equals to word[0]
      if (board[row][col] === word[0]) {
        const id = row * cols + col
        markVisited(id)
        if (isExists(row, col, 1)) return true
        markUnvisited(id)
      }
    }
  }
  return false
}
