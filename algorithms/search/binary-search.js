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

/**
 * Insertion point of target into sorted arr with no duplicates allowed
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearchNoDuplicates(arr, target) {
  let left = 0,
    right = arr.length - 1,
    mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] > target) {
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      // do something
      return mid
    }
  }
  // left is the insertion point
  return left
}

/**
 * Left-most insertion point of target into sorted arr with duplicates allowed
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearchDuplicatesLeft(arr, target) {
  let left = 0,
    right = arr.length,
    mid
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  // left is the insertion point
  return left
}

/**
 * Left-most insertion point of target into sorted arr with duplicates allowed
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearchDuplicatesRight(arr, target) {
  let left = 0,
    right = arr.length,
    mid
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  // right is the insertion point
  return left
}
