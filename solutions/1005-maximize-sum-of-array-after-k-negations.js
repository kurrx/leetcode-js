/**
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations
 *
 * TC: O(n*log(n))
 * SC: O(log(n))
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
function largestSumAfterKNegations(numbers, k) {
  numbers.sort((a, b) => a - b)

  let sum = 0,
    min = Number.MAX_SAFE_INTEGER
  for (let number of numbers) {
    if (number === 0) k = 0
    if (number < 0 && k) {
      number = -number
      k--
    }
    if (number < min) min = number
    sum += number
  }

  if (k % 2 === 1) {
    sum -= 2 * min
  }

  return sum
}
