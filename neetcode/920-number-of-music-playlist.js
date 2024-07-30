const MOD = 1_000_000_007

/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
function numMusicPlaylists(n, goal, k) {
  const dp = new Array(goal + 1)
  for (let i = 0; i <= goal; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  dp[0][0] = 1
  for (let i = 1; i <= goal; i++) {
    for (let j = 1; j <= Math.min(i, n); j++) {
      dp[i][j] = (dp[i - 1][j - 1] * (n - j + 1)) % MOD
      if (j > k) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD
      }
    }
  }
  return dp[goal][n]
}
