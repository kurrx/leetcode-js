/**
 * Find k-th smallest element in the array (Quick Select)
 *
 * Time Complexity: O(n^2) in worst case, O(n) average
 * Space Complexity: O(log n)
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function quickSelect(arr, k) {
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
      // > for k-th largest
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
   * @returns {number}
   */
  function select(low, high) {
    const pivot = partition(low, high)
    if (pivot === k - 1) {
      return arr[pivot]
    } else if (pivot < k - 1) {
      return select(pivot + 1, high)
    }
    return select(low, pivot - 1)
  }
  return select(0, arr.length - 1)
}
