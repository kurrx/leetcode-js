/**
 * https://leetcode.com/problems/numbers-with-same-consecutive-differences
 *
 * TC: O(2^n)
 * SC: O(n)
 *
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function numsSameConsecDiff(n, k) {
  function backtrack(curr) {
    if (curr.length === n) {
      answers.push(curr.reduce((p, c) => p * 10 + c, 0))
      return
    }
    for (let i = 0; i <= 9; i++) {
      if (!curr.length && !i) continue
      if (!curr.length || Math.abs(curr.at(-1) - i) === k) {
        curr.push(i)
        backtrack(curr)
        curr.pop()
      }
    }
  }
  const answers = []
  backtrack([])
  return answers
}
