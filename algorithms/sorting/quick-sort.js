/**
 * In-place quick sort
 *
 * Time Complexity: Worst - O(n^2), Average - O(n log n)
 * Space Complexity: O(log n)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function quickSort(arr) {
  /**
   * @param {number} i
   * @param {number} j
   * @returns {void}
   */
  function swap(i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  /**
   * @param {number} low
   * @param {number} high
   * @returns {number}
   */
  function partition(low, high) {
    const pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++
        swap(j, i)
      }
    }
    swap(i + 1, high)
    return i + 1
  }
  /**
   * @param {number} low
   * @param {number} high
   * @returns {void}
   */
  function sort(low, high) {
    if (low >= high) return
    const pivot = partition(low, high)
    sort(low, pivot - 1)
    sort(pivot + 1, high)
  }
  sort(0, arr.length - 1)
}
