/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  function backtrack(curr = []) {
    if (curr.length === nums.length) return answer.push([...curr])
    for (let i = 0; i < nums.length; i++) {
      if (!used.has(i)) {
        used.add(i)
        curr.push(nums[i])
        backtrack(curr)
        curr.pop()
        used.delete(i)
      }
    }
  }
  const answer = [],
    used = new Set()
  backtrack()
  return answer
}
