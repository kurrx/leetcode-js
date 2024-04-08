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
function numSubarraysWithSum(numbers, goal) {
  const counter = new Map([[0, 1]])
  let currentSum = 0,
    totalCount = 0
  for (const num of numbers) {
    currentSum += num
    totalCount += counter.get(currentSum - goal) || 0
    counter.set(currentSum, (counter.get(currentSum) || 0) + 1)
  }
  return totalCount
}
