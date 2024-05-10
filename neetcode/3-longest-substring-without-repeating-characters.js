/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const n = s.length,
    set = new Set()
  let max = 0
  for (let left = 0, right = 0; right < n; right++) {
    while (set.has(s[right])) set.delete(s[left++])
    set.add(s[right])
    max = Math.max(max, right - left + 1)
  }
  return max
}
