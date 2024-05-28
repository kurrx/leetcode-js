/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
function bestTeamScore(scores, ages) {
  const n = scores.length
  const merged = ages.map((a, i) => [a, scores[i]])
  merged.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  let answer = 0
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = merged[i][1]
    answer = Math.max(answer, dp[i])
  }

  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (merged[i][1] >= merged[j][1]) {
        dp[i] = Math.max(dp[i], merged[i][1] + dp[j])
      }
    }
    answer = Math.max(answer, dp[i])
  }
  return answer
}
