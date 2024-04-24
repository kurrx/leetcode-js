/**
 * https://leetcode.com/problems/contains-duplicate
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {boolean}
 */
function containsDuplicate(numbers) {
  const seenValues = new Set()
  for (const num of numbers) {
    if (seenValues.has(num)) {
      return true
    }
    seenValues.add(num)
  }
  return false
}
