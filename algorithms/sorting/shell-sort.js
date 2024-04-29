/**
 * In-place shell sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function shellSort(arr) {
  const n = arr.length
  let temp, j
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      temp = arr[i]
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap]
      }
      arr[j] = temp
    }
  }
}
