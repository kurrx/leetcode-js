/**
 * https://leetcode.com/problems/combination-sum-iii
 *
 * TC: O(9!*k/(9-k)!)
 * SC: O(k)
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  function backtrack(curr, sum) {
    if (curr.length === k && sum === n) {
      answers.push([...curr])
      return
    }

    for (let i = (curr.at(-1) ?? 0) + 1; i <= 9; i++) {
      if (sum + i <= n && curr.length + 1 <= k) {
        curr.push(i)
        backtrack(curr, sum + i)
        curr.pop()
      }
    }
  }
  const answers = []
  backtrack([], 0)
  return answers
}
