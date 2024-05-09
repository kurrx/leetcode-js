/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
  const n = s.length,
    m = t.length
  if (n < m) return 0
  const dp = [new Array(m + 1).fill(0), new Array(m + 1)]
  dp[0][m] = 1
  dp[1][m] = 1
  let prevIdx = 0
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[1 - prevIdx][j] = dp[prevIdx][j]
      if (s[i] === t[j]) {
        dp[1 - prevIdx][j] += dp[prevIdx][j + 1]
      }
    }
    prevIdx = 1 - prevIdx
  }
  return dp[prevIdx][0]
}
