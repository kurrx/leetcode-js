/**
 * https://leetcode.com/problems/counting-elements
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} arr
 * @return {number}
 */
function countElements(arr) {
  const seenNumbers = new Set(arr)

  let count = 0
  for (const num of arr) {
    if (seenNumbers.has(num + 1)) {
      count++
    }
  }

  return count
}
