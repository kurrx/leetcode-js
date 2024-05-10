/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  const n = matrix.length
  if (n <= 1) return
  let edges, saved, temp
  for (let row = 0; row < Math.floor(n / 2); row++) {
    for (let col = row; col < n - row - 1; col++) {
      temp = matrix[n - col - 1][row]
      matrix[n - col - 1][row] = matrix[n - row - 1][n - col - 1]
      matrix[n - row - 1][n - col - 1] = matrix[col][n - row - 1]
      matrix[col][n - row - 1] = matrix[row][col]
      matrix[row][col] = temp
    }
  }
}
