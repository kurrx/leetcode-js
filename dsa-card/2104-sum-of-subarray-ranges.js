/**
 * https://leetcode.com/problems/sum-of-subarray-ranges
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
function subArrayRanges(nums) {
  const n = nums.length,
    min = [],
    max = []
  let sum = 0,
    j,
    contribution
  for (let i = 0; i <= n; i++) {
    while (min.length && (i === n || nums[min.at(-1)] > nums[i])) {
      j = min.pop()
      contribution = nums[j] * (i - j) * (j - (min.at(-1) ?? -1))
      sum -= contribution
    }
    min.push(i)
    while (max.length && (i === n || nums[max.at(-1)] < nums[i])) {
      j = max.pop()
      contribution = nums[j] * (i - j) * (j - (max.at(-1) ?? -1))
      sum += contribution
    }
    max.push(i)
  }
  return sum
}
