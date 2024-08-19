/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    const newIndex = Math.abs(nums[i]) - 1
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1
    }
  }
  const result = []
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      result.push(i)
    }
  }
  return result
}
