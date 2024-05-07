/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  function backtrack(curr, sum, start) {
    if (sum >= target) {
      if (sum === target) answer.push([...curr])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) break
      curr.push(candidates[i])
      backtrack(curr, sum + candidates[i], i)
      curr.pop()
    }
  }
  candidates.sort((a, b) => a - b)
  const answer = []
  backtrack([], 0, 0)
  return answer
}
