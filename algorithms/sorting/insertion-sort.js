/**
 * In-place insertion sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function insertionSort(arr) {
  const n = arr.length
  let key, j
  for (let i = 1; i < n; i++) {
    key = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
}
