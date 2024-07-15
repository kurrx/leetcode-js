/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
function minCost(n, cuts) {
  const m = cuts.length
  cuts = [0, ...cuts, n].sort((a, b) => a - b)
  const dp = new Array(m + 2)
  for (let i = 0; i <= m + 1; i++) {
    dp[i] = new Array(m + 2).fill(0)
  }
  for (let diff = 2; diff < m + 2; diff++) {
    for (let i = 0; i < m + 2 - diff; i++) {
      let j = i + diff
      let answer = Infinity
      for (let mid = i + 1; mid < j; mid++) {
        answer = Math.min(answer, dp[i][mid] + dp[mid][j] + cuts[j] - cuts[i])
      }
      dp[i][j] = answer
    }
  }
  return dp[0][m + 1]
}
