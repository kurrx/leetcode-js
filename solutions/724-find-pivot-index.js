/**
 * https://leetcode.com/problems/find-pivot-index
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function pivotIndex(numbers) {
  const n = numbers.length

  let totalSum = 0
  for (let i = 0; i < n; i++) {
    totalSum += numbers[i]
  }

  let leftSum = 0
  for (let i = 0; i < n; i++) {
    if (leftSum === totalSum - leftSum - numbers[i]) {
      return i
    }
    leftSum += numbers[i]
  }

  return -1
}
