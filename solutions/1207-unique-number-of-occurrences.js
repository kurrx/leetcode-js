/**
 * https://leetcode.com/problems/unique-number-of-occurrences
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
  const counter = new Map()
  for (const num of arr) {
    counter.set(num, (counter.get(num) || 0) + 1)
  }
  const uniqueCounts = new Set()
  for (const count of counter.values()) {
    if (uniqueCounts.has(count)) {
      return false
    }
    uniqueCounts.add(count)
  }
  return true
}
