/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  if (nums.length === 0) return -1
  if (nums.length === 1) return nums[0]

  let left = 0,
    right = nums.length - 1,
    mid,
    min = Number.MAX_SAFE_INTEGER
  while (left < right) {
    mid = left + Math.floor((right - left) / 2)
    min = Math.min(min, nums[mid])

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return Math.min(min, nums[left])
}
