/**
 * https://leetcode.com/problems/reverse-string
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let left = 0,
    right = s.length - 1

  while (left < right) {
    const temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}
