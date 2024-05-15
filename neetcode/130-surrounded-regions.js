const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  const rows = board.length,
    cols = board[0]?.length
  if (!rows || !cols) return

  // Find all border O's
  function mark(queue, r, c) {
    queue.push([r, c])
    visited.add(r * cols + c)
  }
  function canVisit(r, c, id) {
    return (
      r >= 0 &&
      r < rows &&
      c >= 0 &&
      c < cols &&
      !visited.has(id) &&
      board[r][c] === 'O'
    )
  }
  function bfs(queue, flip) {
    while (queue.length) {
      const length = queue.length
      for (let i = 0; i < length; i++) {
        const [r, c] = queue.shift()
        for (const [dy, dx] of DIRS) {
          const nextR = r + dy,
            nextC = c + dx,
            nextId = nextR * cols + nextC
          if (canVisit(nextR, nextC, nextId)) {
            mark(queue, nextR, nextC)
            if (flip) board[nextR][nextC] = 'X'
          }
        }
      }
    }
  }

  const border = [],
    visited = new Set()
  // Find all border O's
  for (let r = 0; r < rows; r++) {
    if (board[r][0] === 'O') mark(border, r, 0)
    if (board[r][cols - 1] === 'O') mark(border, r, cols - 1)
  }
  for (let c = 0; c < cols; c++) {
    if (board[0][c] === 'O') mark(border, 0, c)
    if (board[rows - 1][c] === 'O') mark(border, rows - 1, c)
  }

  // Mark all border cells as visited
  bfs(border, false)

  // Flip others
  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      const id = r * cols + c
      if (board[r][c] === 'O' && !visited.has(id)) {
        visited.add(id)
        board[r][c] = 'X'
        bfs([[r, c]], true)
      }
    }
  }
}
