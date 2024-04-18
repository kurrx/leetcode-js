/**
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function appendCharacters(s, t) {
  const n = s.length,
    m = t.length
  let j = 0
  for (let i = 0; i < n && j < m; i++) {
    if (s[i] === t[j]) j++
  }
  return m - j
}
