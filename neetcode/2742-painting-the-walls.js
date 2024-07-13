/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
function paintWalls(cost, time) {
  const n = cost.length
  const dp = [new Array(n + 1).fill(Infinity), new Array(n + 1).fill(0)]
  dp[0][0] = 0
  let prevRow = 0
  for (let i = n - 1; i >= 0; i--) {
    for (let remain = 1; remain <= n; remain++) {
      dp[1 - prevRow][remain] = Math.min(
        cost[i] + dp[prevRow][Math.max(0, remain - 1 - time[i])],
        dp[prevRow][remain],
      )
    }
    prevRow = 1 - prevRow
  }
  return dp[prevRow][n]
}
