/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  if (n > m) return uniquePaths(n, m)
  const dp = [new Array(n), new Array(n)]
  let nextIdx = 1
  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      dp[nextIdx][c] = r === m - 1 && c === n - 1 ? 1 : 0
      if (r < m - 1) dp[nextIdx][c] += dp[1 - nextIdx][c]
      if (c < n - 1) dp[nextIdx][c] += dp[nextIdx][c + 1]
    }
    nextIdx = 1 - nextIdx
  }
  return dp[1 - nextIdx][0]
}
