/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeightII(stones) {
  const n = stones.length,
    sum = stones.reduce((a, b) => a + b),
    half = Math.floor(sum / 2),
    dp = []
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(half + 1).fill(false)
    dp[i][0] = true
  }

  let max = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= half; j++) {
      const rem = j - stones[i - 1]
      if (rem >= 0 && dp[i - 1][rem] == true) {
        dp[i][j] = true
      } else {
        dp[i][j] = dp[i - 1][j]
      }
      if (dp[i][j]) {
        max = Math.max(max, j)
      }
    }
  }

  return sum - 2 * max
}
