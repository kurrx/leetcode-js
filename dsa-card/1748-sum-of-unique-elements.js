/**
 * https://leetcode.com/problems/sum-of-unique-elements
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function sumOfUnique(numbers) {
  const counter = new Map()
  for (const num of numbers) {
    counter.set(num, (counter.get(num) || 0) + 1)
  }

  let sum = 0
  for (const [num, count] of counter) {
    if (count === 1) {
      sum += num
    }
  }

  return sum
}
