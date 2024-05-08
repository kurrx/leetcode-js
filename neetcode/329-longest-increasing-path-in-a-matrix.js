const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {number[][]} matrix
 * @return {number}
 */
function longestIncreasingPath(matrix) {
  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols
  }
  function dfs(row, col) {
    let answer = 1
    for (const [dy, dx] of DIRS) {
      const nextRow = row + dy,
        nextCol = col + dx
      if (!isValid(nextRow, nextCol)) continue
      if (matrix[nextRow][nextCol] <= matrix[row][col]) continue
      if (maxPaths[nextRow][nextCol]) {
        answer = Math.max(answer, maxPaths[nextRow][nextCol] + 1)
      } else {
        answer = Math.max(answer, dfs(nextRow, nextCol) + 1)
      }
    }
    maxPaths[row][col] = answer
    return answer
  }
  const rows = matrix.length,
    cols = matrix[0].length
  const maxPaths = []
  for (let row = 0; row < rows; row++) {
    maxPaths.push(new Array(cols).fill(0))
  }
  let max = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (maxPaths[row][col]) {
        max = Math.max(max, maxPaths[row][col])
      } else {
        max = Math.max(max, dfs(row, col))
      }
    }
  }
  return max
}
