/**
 * https://leetcode.com/problems/squares-of-a-sorted-array
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @return {number[]}
 */
function sortedSquares(numbers) {
  const n = numbers.length
  const squaredNumbers = new Array(n)

  let left = 0,
    right = n - 1
  for (let i = n - 1; i >= 0; i--) {
    let nextNumber
    if (Math.abs(numbers[left]) < Math.abs(numbers[right])) {
      nextNumber = numbers[right]
      right--
    } else {
      nextNumber = numbers[left]
      left++
    }
    squaredNumbers[i] = nextNumber ** 2
  }

  return squaredNumbers
}
