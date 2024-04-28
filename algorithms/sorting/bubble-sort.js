/**
 * In-place bubble sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function bubbleSort(arr) {
  const n = arr.length
  let swapped, temp
  for (let i = 0; i < n - 1; i++) {
    swapped = false
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }
    if (!swapped) break
  }
}
