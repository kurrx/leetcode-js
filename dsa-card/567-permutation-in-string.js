const A_CODE = 'a'.charCodeAt(0)
/**
 * https://leetcode.com/problems/permutation-in-string
 *
 * TC: O(n+m)
 * SC: O(1)
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const n = s1.length,
    m = s2.length
  const counter = new Map()
  for (let i = 0; i < n; i++) {
    counter.set(s1[i], (counter.get(s1[i]) ?? 0) + 1)
  }
  let count
  for (let i = 0; i < n; i++) {
    count = (counter.get(s2[i]) ?? 0) - 1
    if (count) counter.set(s2[i], count)
    else counter.delete(s2[i])
  }
  for (let left = 0, right = n; right < m; left++, right++) {
    if (counter.size === 0) return true
    count = (counter.get(s2[left]) ?? 0) + 1
    if (count) counter.set(s2[left], count)
    else counter.delete(s2[left])
    count = (counter.get(s2[right]) ?? 0) - 1
    if (count) counter.set(s2[right], count)
    else counter.delete(s2[right])
  }
  return counter.size === 0
}
