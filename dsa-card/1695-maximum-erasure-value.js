/**
 * https://leetcode.com/problems/maximum-erasure-value
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function maximumUniqueSubarray(nums) {
  const n = nums.length
  const set = new Set()
  let max = 0,
    sum = 0,
    left = 0
  for (let right = 0; right < n; right++) {
    sum += nums[right]
    while (set.has(nums[right])) {
      sum -= nums[left]
      set.delete(nums[left++])
    }
    set.add(nums[right])
    max = Math.max(max, sum)
  }
  return max
}
