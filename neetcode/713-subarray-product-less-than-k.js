/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
  const n = nums.length
  let product = 1,
    answer = 0
  for (let left = 0, right = 0; right < n; right++) {
    product *= nums[right]
    while (product >= k && left < right) {
      product /= nums[left++]
    }
    if (product < k) {
      answer += right - left + 1
    }
  }
  return answer
}
