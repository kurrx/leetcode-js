/**
 * @param {number[]} nums
 * @return {number}
 */
function largestPerimeter(nums) {
  nums.sort((a, b) => a - b)
  const totalSum = nums.reduce((a, b) => a + b)
  let prefix = 0
  for (let i = nums.length - 1; i >= 2; i--) {
    if (nums[i] < totalSum - prefix - nums[i]) {
      return totalSum - prefix
    }
    prefix += nums[i]
  }
  return -1
}
