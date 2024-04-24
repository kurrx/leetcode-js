/**
 * https://leetcode.com/problems/missing-number
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function missingNumber(numbers) {
  const n = numbers.length
  const totalSum = numbers.reduce((sum, num) => sum + num, 0)
  return (n * (n + 1)) / 2 - totalSum
}
