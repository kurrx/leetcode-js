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
  const lastSeenAt = new Map()
  let maxLength = 0
  for (let left = 0, right = 0; right < n; right++) {
    const rightChar = s.charAt(right)
    if (lastSeenAt.has(rightChar)) {
      left = Math.max(left, lastSeenAt.get(rightChar))
    }
    maxLength = Math.max(maxLength, right - left + 1)
    lastSeenAt.set(rightChar, right + 1)
  }
  return maxLength
}
