/**
 * https://leetcode.com/problems/count-elements-with-maximum-frequency
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function maxFrequencyElements(nums) {
  const n = nums.length
  const map = new Map()
  let max = 0,
    answer = 0,
    count
  for (let i = 0; i < n; i++) {
    count = (map.get(nums[i]) ?? 0) + 1
    map.set(nums[i], count)
    if (count > max) {
      max = count
      answer = max
    } else if (count === max) {
      answer += max
    }
  }
  return answer
}
