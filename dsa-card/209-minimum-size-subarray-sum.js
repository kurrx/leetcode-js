/**
 * https://leetcode.com/problems/minimum-size-subarray-sum
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number} target
 * @param {number[]} numbers
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  const n = nums.length
  let min = Infinity,
    currSum = 0,
    left = 0,
    right = 0
  while (left < n || right < n) {
    if (currSum >= target) {
      min = Math.min(min, right - left)
      currSum -= nums[left++]
    } else {
      if (right < n) currSum += nums[right++]
      else break
    }
  }
  return min === Infinity ? 0 : min
}
