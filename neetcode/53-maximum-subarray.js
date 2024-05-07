/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  const n = nums.length
  let max = Number.MIN_SAFE_INTEGER,
    sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    if (sum > max) max = sum
    if (sum < 0) sum = 0
  }
  return max
}
