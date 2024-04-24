/**
 * https://leetcode.com/problems/maximum-average-subarray-i
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(numbers, k) {
  const n = numbers.length

  let currentSum = 0
  for (let i = 0; i < k; i++) {
    currentSum += numbers[i]
  }

  let maxSum = currentSum
  for (let i = k; i < n; i++) {
    currentSum += numbers[i] - numbers[i - k]
    if (currentSum > maxSum) {
      maxSum = currentSum
    }
  }

  return maxSum / k
}
