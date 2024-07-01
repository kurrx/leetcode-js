/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic(nums) {
  let increasing = true,
    decreasing = true
  for (let i = 1; i < nums.length && (increasing || decreasing); i++) {
    if (increasing && nums[i] < nums[i - 1]) {
      increasing = false
    }
    if (decreasing && nums[i] > nums[i - 1]) {
      decreasing = false
    }
  }
  return increasing || decreasing
}
