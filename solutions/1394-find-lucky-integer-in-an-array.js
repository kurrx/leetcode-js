/**
 * https://leetcode.com/problems/find-lucky-integer-in-an-array
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
  const frequencyCounter = new Map()
  for (const num of arr) {
    frequencyCounter.set(num, (frequencyCounter.get(num) || 0) + 1)
  }
  let maxLuckyNumber = -1
  for (const [num, frequency] of frequencyCounter) {
    if (num !== frequency) continue
    if (num > maxLuckyNumber) {
      maxLuckyNumber = num
    }
  }
  return maxLuckyNumber
}
