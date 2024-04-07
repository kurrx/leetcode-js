/**
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function minStartValue(numbers) {
  let currentSum = numbers[0],
    minSum = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    currentSum += numbers[i]
    if (currentSum < minSum) {
      minSum = currentSum
    }
  }
  return Math.max(1, 1 - minSum)
}
