/**
 * https://leetcode.com/problems/assign-cookies
 *
 * TC: O(n*log(n) + m*log(m))
 * SC: O(log(n) + log(m))
 *
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  const n = g.length,
    m = s.length

  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let i = 0,
    j = 0
  while (i < n && j < m) {
    if (g[i] <= s[j]) {
      i++
    }
    j++
  }
  return i
}
