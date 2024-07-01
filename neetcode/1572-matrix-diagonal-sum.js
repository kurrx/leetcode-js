/**
 * @param {number[][]} mat
 * @return {number}
 */
function diagonalSum(mat) {
  let sum = 0
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i] + mat[i][mat.length - i - 1]
  }
  if (mat.length % 2) {
    const center = Math.floor(mat.length / 2)
    sum -= mat[center][center]
  }
  return sum
}
