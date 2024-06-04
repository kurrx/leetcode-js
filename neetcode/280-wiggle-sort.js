/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (
      (i % 2 === 0 && nums[i] > nums[i + 1]) ||
      (i % 2 === 1 && nums[i] < nums[i + 1])
    ) {
      ;[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
    }
  }
}
