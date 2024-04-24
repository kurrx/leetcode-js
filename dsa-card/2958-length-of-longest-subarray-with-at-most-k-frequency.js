/**
 * https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
function maxSubarrayLength(numbers, k) {
  const n = numbers.length
  const counter = new Map()
  let maxLength = 0,
    left = 0
  for (let right = 0; right < n; right++) {
    const rightNum = numbers[right]
    let count = (counter.get(rightNum) || 0) + 1
    while (count > k) {
      const leftNum = numbers[left++]
      if (leftNum === rightNum) {
        count--
      } else {
        counter.set(leftNum, counter.get(leftNum) - 1)
      }
    }
    maxLength = Math.max(maxLength, right - left + 1)
    counter.set(rightNum, count)
  }
  return maxLength
}
