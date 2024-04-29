/**
 * In-place selection sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function selectionSort(arr) {
  const n = arr.length
  let minIndex, temp
  for (let i = 0; i < n - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
}
