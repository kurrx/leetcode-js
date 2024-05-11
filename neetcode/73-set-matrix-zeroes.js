/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    rows = new Array(7).fill(0),
    cols = new Array(7).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!matrix[i][j]) {
        // Mark row as 0 contained
        rows[Math.floor(i / 32)] |= 1 << i % 32
        // Mark col as 0 contained
        cols[Math.floor(j / 32)] |= 1 << j % 32
      }
    }
  }
  let rowContains
  for (let i = 0; i < m; i++) {
    rowContains = rows[Math.floor(i / 32)] & (1 << i % 32)
    for (let j = 0; j < n; j++) {
      if (rowContains || cols[Math.floor(j / 32)] & (1 << j % 32)) {
        matrix[i][j] = 0
      }
    }
  }
}
