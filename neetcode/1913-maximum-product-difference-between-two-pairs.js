/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProductDifference(nums) {
  nums.sort((a, b) => a - b)
  return nums.at(-1) * nums.at(-2) - nums[1] * nums[0]
}
