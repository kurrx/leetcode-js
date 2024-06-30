/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s
  const matrix = []
  for (let i = 0; i < numRows; i++) {
    matrix[i] = []
  }
  let dir = 1,
    r = 0,
    c = 0
  for (let i = 0; i < s.length; i++) {
    matrix[r][c] = s[i]
    if (dir === 1) {
      r++
    } else {
      r--
      c++
    }
    if (r === numRows) {
      dir = -1
      r = numRows - 2
      c++
    }
    if (r === -1) {
      dir = 1
      r = 1
      c--
    }
  }
  let result = ''
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        result += matrix[i][j]
      }
    }
  }
  return result
}
