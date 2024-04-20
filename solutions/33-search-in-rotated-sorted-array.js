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
  let k = 0,
    left = 0,
    right = n - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[n - 1]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  k = n - left - 1

  left = 0
  right = n - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2),
      realMid = (n + mid - k) % n,
      val = nums[realMid]
    if (target === val) return realMid
    else if (target < val) right = mid - 1
    else left = mid + 1
  }
  return -1
}
