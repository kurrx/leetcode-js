/**
 * https://leetcode.com/problems/running-sum-of-1d-array
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @return {number[]}
 */
function runningSum(numbers) {
  const prefixNumbers = [numbers[0]]
  for (let i = 1; i < numbers.length; i++) {
    prefixNumbers.push(numbers[i] + prefixNumbers[prefixNumbers.length - 1])
  }
  return prefixNumbers
}
