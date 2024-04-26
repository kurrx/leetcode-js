/**
 * https://leetcode.com/problems/binary-subarrays-with-sum
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
  const n = nums.length
  let left = 0,
    prefixZeros = 0,
    count = 0,
    sum = 0
  for (let right = 0; right < n; right++) {
    sum += nums[right]
    while (left < right && (!nums[left] || sum > goal)) {
      if (nums[left]) prefixZeros = 0
      else prefixZeros++
      sum -= nums[left++]
    }
    if (sum === goal) {
      count += 1 + prefixZeros
    }
  }
  return count
}
