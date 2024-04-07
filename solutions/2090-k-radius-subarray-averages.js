/**
 * https://leetcode.com/problems/k-radius-subarray-averages
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
function getAverages(numbers, k) {
  const n = numbers.length,
    windowSize = k * 2 + 1

  let sum = 0
  for (let i = 0; i < windowSize && i < n; i++) {
    sum += numbers[i]
  }

  const averages = []
  for (let i = 0; i < n; i++) {
    if (i < k || i >= n - k) {
      averages.push(-1)
    } else {
      averages.push(Math.floor(sum / windowSize))
      sum += numbers[i + k + 1] - numbers[i - k]
    }
  }

  return averages
}
