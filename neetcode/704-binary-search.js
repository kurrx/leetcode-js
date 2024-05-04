/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
