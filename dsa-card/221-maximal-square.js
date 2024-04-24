/**
 * https://leetcode.com/problems/maximal-square
 *
 * TC: O(m*n)
 * SC: O(n)
 *
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  const m = matrix.length,
    n = matrix[0].length
  let prevRow,
    max = 0,
    min
  for (let i = 0; i < m; i++) {
    const nextRow = new Array(n + 1)
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== '1') continue
      min = Math.min(
        prevRow?.[j] ?? 0,
        nextRow[j - 1] ?? 0,
        prevRow?.[j - 1] ?? 0,
      )
      min++
      nextRow[j] = min
      if (max < min) max = min
    }
    prevRow = nextRow
  }
  return max * max
}
