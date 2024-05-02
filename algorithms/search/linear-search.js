/**
 * Left-most linear search (returns index of first occurrence of target, otherwise -1)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function linearSearch(arr, target) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}
