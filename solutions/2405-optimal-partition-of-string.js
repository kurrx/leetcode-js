/**
 * https://leetcode.com/problems/optimal-partition-of-string
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function partitionString(s) {
  const seen = new Set()
  let substrings = 0
  for (const char of s) {
    if (seen.has(char)) {
      seen.clear()
      substrings++
    }
    seen.add(char)
  }
  if (seen.size > 0) {
    seen.clear()
    substrings++
  }
  return substrings
}
