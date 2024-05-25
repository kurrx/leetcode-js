/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let count = 1,
    candidate = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) candidate = nums[i]
    count += nums[i] === candidate ? 1 : -1
  }
  return candidate
}
