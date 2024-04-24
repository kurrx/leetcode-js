/**
 * https://leetcode.com/problems/minimum-falling-path-sum
 *
 * TC: O(n^2)
 * SC: O(n)
 *
 * @param {number[][]} matrix
 * @return {number}
 */
function minFallingPathSum(matrix) {
  const n = matrix.length
  let prevRow
  for (let row = 0; row < n; row++) {
    const nextRow = new Array(n)
    for (let col = 0; col < n; col++) {
      nextRow[col] = 0
      if (row > 0) {
        nextRow[col] = prevRow[col]
        if (col > 0) {
          nextRow[col] = Math.min(nextRow[col], prevRow[col - 1])
        }
        if (col < n - 1) {
          nextRow[col] = Math.min(nextRow[col], prevRow[col + 1])
        }
      }
      nextRow[col] += matrix[row][col]
    }
    prevRow = nextRow
  }
  let min = Number.MAX_SAFE_INTEGER
  for (const col of prevRow) {
    min = Math.min(min, col)
  }
  return min
}
