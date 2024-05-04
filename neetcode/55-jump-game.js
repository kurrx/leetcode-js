/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  const n = nums.length
  let farthest = 0
  for (let i = 0; i < n; i++) {
    if (i > farthest) return false
    farthest = Math.max(farthest, i + nums[i])
    if (farthest >= n - 1) return true
  }
  return true
}
