/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  function backtrack(curr, start) {
    answer.push([...curr])
    for (let i = start; i < n; i++) {
      curr.push(nums[i])
      backtrack(curr, i + 1)
      curr.pop()
    }
  }
  const n = nums.length,
    answer = []
  backtrack([], 0)
  return answer
}
