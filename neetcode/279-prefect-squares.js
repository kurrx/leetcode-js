/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const dp = new Array(n + 1)
  dp[0] = 0
  for (let left = 1; left <= n; left++) {
    dp[left] = Infinity
    for (let sqr = 1; sqr * sqr <= left; sqr++) {
      dp[left] = Math.min(dp[left], 1 + dp[left - sqr * sqr])
    }
  }
  return dp[n]
}
