/**
 * https://leetcode.com/problems/contiguous-array
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function findMaxLength(nums) {
  const n = nums.length
  const counter = new Map([[0, -1]])
  let count = 0,
    max = 0
  for (let i = 0; i < n; i++) {
    count += nums[i] || -1
    if (counter.has(count)) {
      max = Math.max(max, i - counter.get(count))
    } else {
      counter.set(count, i)
    }
  }
  return max
}
