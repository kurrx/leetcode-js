/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const m = grid.length,
    n = grid[0].length,
    dp = [new Array(n), new Array(n)]
  let nextRow = 0
  dp[0][n - 1] = grid[m - 1][n - 1]
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) continue
      dp[nextRow][j] = Infinity
      if (i <= m - 2) {
        dp[nextRow][j] = Math.min(
          dp[nextRow][j],
          grid[i][j] + dp[1 - nextRow][j],
        )
      }
      if (j <= n - 2) {
        dp[nextRow][j] = Math.min(
          dp[nextRow][j],
          grid[i][j] + dp[nextRow][j + 1],
        )
      }
    }
    nextRow = 1 - nextRow
  }
  return dp[1 - nextRow][0]
}
