/**
 * @param {number[][]} matrix
 * @return {number}
 */
function largestSubmatrix(matrix) {
  const m = matrix.length,
    n = matrix[0].length
  let max = 0,
    prevRow
  for (let r = 0; r < m; r++) {
    const nextRow = [...matrix[r]]
    if (r > 0) {
      for (let c = 0; c < n; c++) {
        if (matrix[r][c]) {
          nextRow[c] += prevRow[c]
        }
      }
    }
    prevRow = [...nextRow]
    nextRow.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
      max = Math.max(max, nextRow[i] * (n - i))
    }
  }
  return max
}
