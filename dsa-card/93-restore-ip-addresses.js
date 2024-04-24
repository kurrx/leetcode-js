/**
 * https://leetcode.com/problems/restore-ip-addresses
 *
 * TC: O(2^n)
 * SC: O(1)
 *
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  function backtrack(curr = [], start = 0) {
    if (curr.length === 4 && start >= s.length) {
      answers.push(curr.join('.'))
      return
    }
    if (s[start] === '0') {
      curr.push(0)
      backtrack(curr, start + 1)
      curr.pop()
    } else {
      let currNum = 0
      for (let i = start; i < s.length; i++) {
        const digit = s.charCodeAt(i) - ZERO_CODE
        currNum = currNum * 10 + digit
        if (currNum > 255) break
        curr.push(currNum)
        backtrack(curr, i + 1)
        curr.pop()
      }
    }
  }
  const answers = []
  backtrack()
  return answers
}
const ZERO_CODE = '0'.charCodeAt(0)
