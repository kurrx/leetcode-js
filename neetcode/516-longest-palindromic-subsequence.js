/**
 * @param {string} s
 * @return {number}
 */
function longestPalindromeSubseq(s) {
  const dp = [new Array(s.length).fill(0), new Array(s.length).fill(0)]
  let nextRow = 0
  for (let i = s.length - 1; i >= 0; i--) {
    dp[nextRow][i] = 1
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[nextRow][j] = dp[1 - nextRow][j - 1] + 2
      } else {
        dp[nextRow][j] = Math.max(dp[1 - nextRow][j], dp[nextRow][j - 1])
      }
    }
    nextRow = 1 - nextRow
  }
  return dp[1 - nextRow][s.length - 1]
}
