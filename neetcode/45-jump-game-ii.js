/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  const n = nums.length
  let steps = 0,
    start = 0,
    end = 0
  for (let i = 0; i < n - 1; i++) {
    end = Math.max(end, i + nums[i])
    if (i === start) {
      steps++
      start = end
    }
  }
  return steps
}
