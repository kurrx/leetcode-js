/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  const n1 = text1.length,
    n2 = text2.length
  if (n1 < n2) return longestCommonSubsequence(text2, text1)
  const dp = [new Array(n2 + 1), new Array(n2 + 1)]
  let nextIdx = 1
  for (let i = n1 - 1; i >= 0; i--) {
    for (let j = n2 - 1; j >= 0; j--) {
      dp[nextIdx][j] = Math.max(
        dp[1 - nextIdx][j] ?? 0,
        dp[nextIdx][j + 1] ?? 0,
      )
      if (text1[i] === text2[j])
        dp[nextIdx][j] = Math.max(
          dp[nextIdx][j],
          (dp[1 - nextIdx][j + 1] ?? 0) + 1,
        )
    }
    nextIdx = 1 - nextIdx
  }
  return dp[1 - nextIdx][0]
}
