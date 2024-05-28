/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
function minOperations(nums, x) {
  if (x === 0) return 0
  const n = nums.length
  const totalSum = nums.reduce((p, a) => p + a, 0)

  // Even if we remove all elements it's not possible
  if (x > totalSum) return -1

  // We can achieve it if we remove all elements
  if (x === totalSum) return n

  // Sliding Window
  let maxSize = -1,
    sum = 0
  for (let left = 0, right = 0; right < n; right++) {
    sum += nums[right]
    while (sum > totalSum - x && left <= right) sum -= nums[left++]
    if (sum === totalSum - x) maxSize = Math.max(maxSize, right - left + 1)
  }
  return maxSize !== -1 ? n - maxSize : -1
}
