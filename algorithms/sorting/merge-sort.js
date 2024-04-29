/**
 * In-place merge sort
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function mergeSort(arr) {
  /**
   * @param {number} left
   * @param {number} mid
   * @param {number} right
   */
  function merge(left, mid, right) {
    const n1 = mid - left + 1,
      n2 = right - mid,
      leftPart = [],
      rightPart = []
    for (let i = 0; i < n1; i++) leftPart.push(arr[left + i])
    for (let i = 0; i < n2; i++) rightPart.push(arr[mid + i + 1])

    let i = 0,
      j = 0,
      k = left
    while (i < n1 && j < n2) {
      if (leftPart[i] < rightPart[j]) {
        arr[k++] = leftPart[i++]
      } else {
        arr[k++] = rightPart[j++]
      }
    }

    while (i < n1) arr[k++] = leftPart[i++]
    while (j < n2) arr[j++] = rightPart[j++]
  }
  /**
   * @param {number} left
   * @param {number} right
   */
  function sort(left, right) {
    if (left >= right) return
    const mid = left + Math.floor((right - left) / 2)
    sort(left, mid)
    sort(mid + 1, right)
    merge(left, mid, right)
  }
  return sort(0, arr.length - 1)
}
