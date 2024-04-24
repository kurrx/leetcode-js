/**
 * https://leetcode.com/problems/removing-stars-from-a-string
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function removeStars(s) {
  const stack = []
  for (const char of s) {
    if (char === '*') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}
