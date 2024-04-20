/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array
 *
 * TC: O(k+log(n))
 * SC: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  const n = nums.length
  let left = 0,
    right = n - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}
