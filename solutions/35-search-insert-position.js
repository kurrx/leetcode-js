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
    right = numbers.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (target > numbers[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
