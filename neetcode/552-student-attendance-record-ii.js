const MOD = 1_000_000_007
/**
 * @param {number} n
 * @return {number}
 */
function checkRecord(n) {
  const dp = [
    [
      [1, 1, 1],
      [1, 1, 1],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
  ]
  let prevRow = 0
  for (let left = 1; left <= n; left++) {
    for (let abs = 0; abs <= 1; abs++) {
      for (let late = 0; late <= 2; late++) {
        dp[1 - prevRow][abs][late] = dp[prevRow][abs][0]
        if (!abs) {
          dp[1 - prevRow][abs][late] += dp[prevRow][1][0]
        }
        if (late < 2) {
          dp[1 - prevRow][abs][late] += dp[prevRow][abs][late + 1]
        }
        dp[1 - prevRow][abs][late] %= MOD
      }
    }
    prevRow = 1 - prevRow
  }
  return dp[prevRow][0][0]
}
