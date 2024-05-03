/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  function backtrack(row) {
    if (row === n) {
      if (state.length !== n) return
      answer.push(state.map(row => row.join('')))
    }

    for (let col = 0; col < n; col++) {
      const diagonal = row - col,
        antiDiagonal = n - row - col - 1
      if (
        cols.has(col) ||
        diagonals.has(diagonal) ||
        antiDiagonals.has(antiDiagonal)
      )
        continue
      cols.add(col)
      diagonals.add(diagonal)
      antiDiagonals.add(antiDiagonal)
      state[row][col] = 'Q'
      backtrack(row + 1)
      state[row][col] = '.'
      antiDiagonals.delete(antiDiagonal)
      diagonals.delete(diagonal)
      cols.delete(col)
    }
  }
  const cols = new Set(),
    diagonals = new Set(),
    antiDiagonals = new Set(),
    answer = [],
    state = Array.from({ length: n }, () => new Array(n).fill('.'))
  backtrack(0)
  return answer
}
