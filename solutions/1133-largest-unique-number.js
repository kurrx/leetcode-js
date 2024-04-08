/**
 * https://leetcode.com/problems/largest-unique-number
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function largestUniqueNumber(numbers) {
  const counter = new Map()
  for (const num of numbers) {
    counter.set(num, (counter.get(num) || 0) + 1)
  }

  let maxNum = -1
  for (const [num, freq] of counter) {
    if (freq !== 1) continue
    if (num > maxNum) {
      maxNum = num
    }
  }

  return maxNum
}
