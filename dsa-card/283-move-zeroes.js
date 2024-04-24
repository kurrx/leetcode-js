/**
 * https://leetcode.com/problems/move-zeroes
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
function moveZeroes(numbers) {
  const n = numbers.length

  let nonZeroIndex = 0
  for (let i = 0; i < n; i++) {
    if (numbers[i] !== 0) {
      numbers[nonZeroIndex++] = numbers[i]
    }
  }

  while (nonZeroIndex < n) {
    numbers[nonZeroIndex++] = 0
  }
}
