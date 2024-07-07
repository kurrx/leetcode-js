/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(grid) {
  const m = grid.length,
    n = grid[0].length,
    dp = [new Array(n), new Array(n)]
  let nextIdx = 0
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[nextIdx][j] = 0
      if (grid[i][j] === 1) continue
      if (i === m - 1 && j === n - 1) {
        dp[nextIdx][j] = 1
      } else {
        if (i !== m - 1 && grid[i + 1][j] !== 1) {
          dp[nextIdx][j] += dp[1 - nextIdx][j]
        }
        if (j !== n - 1 && grid[i][j + 1] !== 1) {
          dp[nextIdx][j] += dp[nextIdx][j + 1]
        }
      }
    }
    nextIdx = 1 - nextIdx
  }
  return dp[1 - nextIdx][0]
}
