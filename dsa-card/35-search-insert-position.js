/**
 * https://leetcode.com/problems/search-insert-position
 *
 * TC: O(log(n))
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
function searchInsert(numbers, target) {
  let left = 0,
    right = numbers.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target === numbers[mid]) {
      return mid
    } else if (target < numbers[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
