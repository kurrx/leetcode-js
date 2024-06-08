/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  function backtrack(start, curr) {
    if (curr.length === k) {
      answer.push([...curr])
      return
    }
    for (let i = start; i <= n; i++) {
      curr.push(i)
      backtrack(i + 1, curr)
      curr.pop()
    }
  }
  const answer = []
  backtrack(1, [])
  return answer
}
