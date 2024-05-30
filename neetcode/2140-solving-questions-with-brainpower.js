/**
 * @param {number[][]} questions
 * @return {number}
 */
function mostPoints(questions) {
  const n = questions.length,
    dp = new Array(n + 1)
  dp[n] = 0
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Math.max(
      dp[i + 1],
      (dp[i + questions[i][1] + 1] ?? 0) + questions[i][0],
    )
  }
  return dp[0]
}
