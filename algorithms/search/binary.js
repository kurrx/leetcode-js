/**
 * Left-most binary search (returns index of first occurrence of target, otherwise -1).
 * Array must be sorted.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    mid
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] > target) right = mid - 1
    else left = mid + 1
  }
  return -1
}
