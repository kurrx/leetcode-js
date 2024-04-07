/**
 * https://leetcode.com/problems/reverse-string
 *
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString1(s) {
  // s.reverse()

  // OR

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
