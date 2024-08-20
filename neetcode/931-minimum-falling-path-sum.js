function minFallingPathSum(matrix) {
  const n = matrix.length,
    dp = [new Array(n), new Array(n)]
  let rowIdx = 1
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      dp[rowIdx][col] = 0
      if (row > 0) {
        dp[rowIdx][col] = dp[1 - rowIdx][col]
        if (col > 0) {
          dp[rowIdx][col] = Math.min(dp[rowIdx][col], dp[1 - rowIdx][col - 1])
        }
        if (col < n - 1) {
          dp[rowIdx][col] = Math.min(dp[rowIdx][col], dp[1 - rowIdx][col + 1])
        }
      }
      dp[rowIdx][col] += matrix[row][col]
    }
    rowIdx = 1 - rowIdx
  }
  return dp[1 - rowIdx].reduce((a, b) => Math.min(a, b))
}
