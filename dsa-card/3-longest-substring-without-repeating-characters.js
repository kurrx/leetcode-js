/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const n = s.length
  const map = new Map()
  let max = 0,
    left = 0,
    lastIdx
  for (let right = 0; right < n; right++) {
    lastIdx = map.get(s[right]) ?? -1
    if (lastIdx !== -1 && lastIdx >= left && lastIdx < right) {
      left = lastIdx + 1
    }
    max = Math.max(max, right - left + 1)
    map.set(s[right], right)
  }
  return max
}
