/**
 * https://leetcode.com/problems/word-break
 *
 * TC: O(n*m*k)
 * SC: O(n)
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  function dp(start) {
    if (start >= n) return true
    if ((memo[start] ?? -1) !== -1) return memo[start]

    for (const word of wordDict) {
      if (s[start] !== word[0]) continue
      if (n - start < word.length) continue
      let matches = true
      for (let j = 0; j < word.length; j++) {
        if (s[start + j] !== word[j]) {
          matches = false
          break
        }
      }
      if (matches && dp(start + word.length)) {
        memo[start] = true
        return true
      }
    }

    memo[start] = false
    return false
  }
  const n = s.length,
    memo = new Array(n)
  return dp(0)
}
