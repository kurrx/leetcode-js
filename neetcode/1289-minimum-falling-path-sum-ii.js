/**
 * @param {number[][]} grid
 * @return {number}
 */
function minFallingPathSum(grid) {
  const n = grid.length,
    dp = new Array(n)
  for (let col = 0; col < n; col++) {
    dp[col] = new Array(n)
  }
  for (let col = 0; col < n; col++) {
    dp[n - 1][col] = grid[n - 1][col]
  }
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      let nextMin = Infinity
      for (let nextRowCol = 0; nextRowCol < n; nextRowCol++) {
        if (nextRowCol === col) continue
        nextMin = Math.min(nextMin, dp[row + 1][nextRowCol])
      }
      dp[row][col] = grid[row][col] + nextMin
    }
  }
  let answer = Infinity
  for (let col = 0; col < n; col++) {
    answer = Math.min(answer, dp[0][col])
  }
  return answer
}
