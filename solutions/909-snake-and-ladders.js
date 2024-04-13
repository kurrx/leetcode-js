/**
 * https://leetcode.com/problems/snakes-and-ladders
 *
 * TC: O(n^2)
 * SC: O(n^2)
 *
 * @param {number[][]} board
 * @return {number}
 */
function snakesAndLadders(board) {
  function getCoord(curr) {
    const rowFromBottom = Math.ceil(curr / n)
    let col = (curr - 1) % n
    if (rowFromBottom % 2 === 0) {
      col = n - col - 1
    }
    return [n - rowFromBottom, col]
  }

  const n = board.length,
    dest = n * n,
    cells = new Map(),
    dist = new Array(n * n + 1),
    queue = []

  cells.set(1, [n - 1, 0])
  dist[1] = 0
  queue.push(1)

  while (queue.length) {
    const curr = queue.shift()
    const from = curr + 1,
      to = Math.min(curr + 6, dest)
    for (let next = from; next <= to; next++) {
      let cell = cells.get(next)
      if (!cell) cells.set(next, (cell = getCoord(next)))
      const [r, c] = cell
      const boardNext = board[r][c] != -1 ? board[r][c] : next
      if ((dist[boardNext] ?? -1) === -1) {
        dist[boardNext] = dist[curr] + 1
        queue.push(boardNext)
      }
    }
  }

  return dist[dest] ?? -1
}
