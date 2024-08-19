/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
function numSubmatrixSumTarget(matrix, target) {
  const rows = matrix.length,
    cols = matrix[0].length,
    prefix = new Array(rows + 1)
  for (let r = 0; r <= rows; r++) {
    prefix[r] = new Array(cols + 1).fill(0)
  }
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      prefix[r][c] =
        prefix[r - 1][c] +
        prefix[r][c - 1] -
        prefix[r - 1][c - 1] +
        matrix[r - 1][c - 1]
    }
  }

  let count = 0,
    currSum = 0
  const map = new Map()
  for (let r1 = 1; r1 <= rows; r1++) {
    for (let r2 = r1; r2 <= rows; r2++) {
      map.clear()
      map.set(0, 1)
      for (let c = 1; c <= cols; c++) {
        currSum = prefix[r2][c] - prefix[r1 - 1][c]
        count += map.get(currSum - target) ?? 0
        map.set(currSum, (map.get(currSum) ?? 0) + 1)
      }
    }
  }
  return count
}
