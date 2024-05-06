/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const m = matrix.length,
    n = matrix[0].length
  let left = 0,
    right = m * n - 1,
    mid,
    row,
    col
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    row = Math.floor(mid / n)
    col = mid % n
    if (target === matrix[row][col]) {
      return true
    } else if (target < matrix[row][col]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}
