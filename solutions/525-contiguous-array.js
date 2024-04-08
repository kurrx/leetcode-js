/**
 * https://leetcode.com/problems/contiguous-array
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */

function findMaxLength(numbers) {
  const n = numbers.length
  const counter = new Map()
  counter.set(0, -1)
  let maxLength = 0,
    count = 0
  for (let i = 0; i < n; i++) {
    count += numbers[i] || -1
    if (counter.has(count)) {
      maxLength = Math.max(maxLength, i - counter.get(count))
    } else {
      counter.set(count, i)
    }
  }
  return maxLength
}
