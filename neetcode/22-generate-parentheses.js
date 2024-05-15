/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  function backtrack(curr = [], opened = 0, closed = 0) {
    // Base case: Stop when we opened all brackets and closed them
    if (curr.length === n * 2) {
      answer.push(curr.join(''))
      return
    }
    // We can open brackets until we reach the n
    if (opened < n) {
      curr.push('(')
      backtrack(curr, opened + 1, closed)
      curr.pop()
    }
    // We can close bracket when we have more opened that closed
    if (opened > closed) {
      curr.push(')')
      backtrack(curr, opened, closed + 1)
      curr.pop()
    }
  }
  const answer = []
  backtrack()
  return answer
}
