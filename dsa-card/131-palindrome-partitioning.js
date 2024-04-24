/**
 * https://leetcode.com/problems/palindrome-partitioning
 *
 * TC: O(n*2^n)
 * SC: O(n)
 *
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1
    while (left <= right) {
      if (str[left++] !== str[right--]) {
        return false
      }
    }
    return true
  }
  function backtrack(curr = [], start = 0) {
    if (start >= s.length) {
      answers.push([...curr])
      return
    }

    const part = []
    for (let i = start; i < s.length; i++) {
      part.push(s[i])
      if (isPalindrome(part)) {
        curr.push(part.join(''))
        backtrack(curr, i + 1)
        curr.pop()
      }
    }
  }
  const answers = []
  backtrack()
  return answers
}
