/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  function backtrack(curr = [], start = 0) {
    answer.push([...curr])
    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i] === nums[i - 1]) continue
      curr.push(nums[i])
      backtrack(curr, i + 1)
      curr.pop()
    }
  }
  nums.sort((a, b) => a - b)
  const answer = []
  backtrack()
  return answer
}
