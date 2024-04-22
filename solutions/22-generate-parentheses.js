/**
 * https://leetcode.com/problems/generate-parentheses
 *
 * TC: O(4^n/sqrt(n))
 * SC: O(n)
 *
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  function backtrack(curr, opened, closed) {
    if (closed === n) {
      answers.push(curr.join(''))
      return
    }
    if (opened < n) {
      curr.push('(')
      backtrack(curr, opened + 1, closed)
      curr.pop()
    }
    if (opened > closed) {
      curr.push(')')
      backtrack(curr, opened, closed + 1)
      curr.pop()
    }
  }
  const answers = []
  backtrack([], 0, 0)
  return answers
}
