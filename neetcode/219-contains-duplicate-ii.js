/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  const set = new Set(),
    firstWindowSize = Math.min(k, nums.length)
  for (let i = 0; i < firstWindowSize; i++) {
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }
  for (let left = 0, right = k; right < nums.length; right++, left++) {
    if (set.has(nums[right])) return true
    set.add(nums[right])
    set.delete(nums[left])
  }
  return false
}
