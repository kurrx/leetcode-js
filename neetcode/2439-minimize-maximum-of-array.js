/**
 * @param {number[]} nums
 * @return {number}
 */
function minimizeArrayValue(nums) {
  const n = nums.length
  let prefix = nums[0],
    max = nums[0]
  for (let i = 1; i < n; i++) {
    prefix += nums[i]
    max = Math.max(max, Math.ceil(prefix / (i + 1)))
  }
  return max
}
