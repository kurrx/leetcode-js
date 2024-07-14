/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
function new21Game(n, k, maxPts) {
  const dp = new Array(n + 1)
  dp[0] = 1
  let s = k > 0 ? 1 : 0
  for (let i = 1; i <= n; i++) {
    dp[i] = s / maxPts
    if (i < k) s += dp[i]
    if (i - maxPts >= 0 && i - maxPts < k) s -= dp[i - maxPts]
  }
  let answer = 0
  for (let i = k; i <= n; i++) {
    answer += dp[i]
  }
  return answer
}
