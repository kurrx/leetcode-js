const ZERO = '0'.charCodeAt(0)
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rows = new Array(9).fill(0),
    cols = new Array(9).fill(0),
    boxes = new Array(9).fill(0)
  let num, box, bit
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') continue
      num = board[row][col].charCodeAt(0) - ZERO
      bit = 1 << (num - 1)
      box = Math.floor(row / 3) * 3 + Math.floor(col / 3)
      if (rows[row] & bit) return false
      if (cols[col] & bit) return false
      if (boxes[box] & bit) return false
      rows[row] ^= bit
      cols[col] ^= bit
      boxes[box] ^= bit
    }
  }
  return true
}
