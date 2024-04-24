/**
 * https://leetcode.com/problems/ones-and-zeroes
 *
 * TC: O(l*m*n)
 * SC: O(m*n)
 *
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
  const dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1)
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0
    }
  }
  let count0, count1
  for (let k = 0; k < strs.length; k++) {
    count0 = 0
    count1 = 0
    for (const char of strs[k]) {
      if (char === '0') count0++
      else count1++
    }
    for (let i = m; i >= count0; i--) {
      for (let j = n; j >= count1; j--) {
        dp[i][j] = Math.max(1 + dp[i - count0][j - count1], dp[i][j])
      }
    }
  }
  return dp[m][n]
}
