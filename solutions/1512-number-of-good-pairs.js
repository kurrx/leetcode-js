/**
 * https://leetcode.com/problems/number-of-good-pairs
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function numIdenticalPairs(numbers) {
  const seenNumbers = new Map()
  let count = 0
  for (const num of numbers) {
    const currentCount = seenNumbers.get(num) || 0
    count += currentCount
    seenNumbers.set(num, currentCount + 1)
  }
  return count
}
