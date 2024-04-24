/**
 * https://leetcode.com/problems/longest-palindrome
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const counter = new Map()
  for (const char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1)
  }

  let total = 0,
    meetOdd = false
  for (const count of counter.values()) {
    if (count % 2 === 0) {
      total += count
    } else {
      meetOdd = true
      total += count - 1
    }
  }
  return meetOdd ? total + 1 : total
}
