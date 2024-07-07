/**
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
  const n = nums.length,
    freq = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    freq[Math.min(n, nums[i])]++
  }
  let numGreaterThanOrEqual = 0
  for (let i = n; i >= 1; i--) {
    numGreaterThanOrEqual += freq[i]
    if (i === numGreaterThanOrEqual) {
      return i
    }
  }
  return -1
}
