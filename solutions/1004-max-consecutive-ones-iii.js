/**
 * https://leetcode.com/problems/max-consecutive-ones-iii
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
function longestOnes(numbers, k) {
  const n = numbers.length
  let left = 0,
    zeros = 0,
    max = 0

  for (let right = 0; right < n; right++) {
    if (numbers[right] === 0) {
      zeros++
    }

    while (zeros > k) {
      if (numbers[left] === 0) {
        zeros--
      }
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}
