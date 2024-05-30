/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  function isSet(num, val) {
    return num & (1 << val)
  }
  function set(num, val) {
    return num | (1 << val)
  }
  function backtrack(row = 0, cols = 0, diagonals = 0, antiDiagonals = 0) {
    if (row >= n) {
      counter++
      return
    }
    for (let col = 0; col < n; col++) {
      if (isSet(cols, col)) continue
      const diagonal = col - row + n - 1
      if (isSet(diagonals, diagonal)) continue
      const antiDiagonal = col + row
      if (isSet(antiDiagonals, antiDiagonal)) continue
      backtrack(
        row + 1,
        set(cols, col),
        set(diagonals, diagonal),
        set(antiDiagonals, antiDiagonal),
      )
    }
  }
  let counter = 0
  backtrack()
  return counter
}
