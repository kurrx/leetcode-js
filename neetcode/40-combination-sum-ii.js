/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  function backtrack(curr, start, target) {
    if (!target) return answer.push([...curr])
    if (start >= candidates.length) return
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue
      if (candidates[i] > target) break
      curr.push(candidates[i])
      backtrack(curr, i + 1, target - candidates[i])
      curr.pop()
    }
  }
  candidates.sort((a, b) => a - b)
  const answer = []
  backtrack([], 0, target)
  return answer
}
