/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let l = 0,
    r = nums.length - 1,
    m
  while (l <= r) {
    m = Math.floor((l + r) / 2)
    if (nums[m] === target) return m
    else if (nums[l] < nums[m]) {
      if (nums[l] <= target && target < nums[m]) r = m - 1
      else l = m + 1
    } else {
      if (target <= nums[r] && nums[m] > target) l = m + 1
      else r = m - 1
    }
  }
  return -1
}
