/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
  const n = nums.length
  if (n === 0) return false
  let left = 0,
    right = n - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return true
    if (nums[mid] === nums[left]) {
      left++
      continue
    }
    const midHalf = nums[left] <= nums[mid],
      targetHalf = nums[left] <= target
    if (midHalf === targetHalf) {
      if (nums[mid] < target) left = mid + 1
      else right = mid - 1
    } else {
      if (midHalf) left = mid + 1
      else right = mid - 1
    }
  }
  return false
}
