/**
 * In-place tim sort
 *
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number[]} arr
 * @returns {void}
 */
function timSort(arr) {
  /**
   * @param {number} left
   * @param {number} right
   * @returns {void}
   */
  function insertionSort(left, right) {
    let temp, j
    for (let i = left + 1; i <= right; i++) {
      temp = arr[i]
      j = i - 1
      while (j >= left && arr[j] > temp) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = temp
    }
  }
  /**
   * @param {number} left
   * @param {number} mid
   * @param {number} right
   * @returns {void}
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
      k = 0
    while (i < n1 && j < n2) {
      if (leftPart[i] <= rightPart[j]) {
        arr[k++] = leftPart[i++]
      } else {
        arr[k++] = rightPart[j++]
      }
    }
    while (i < n1) arr[k++] = leftPart[i++]
    while (j < n2) arr[k++] = rightPart[j++]
  }
  /**
   * @param {number} n
   * @returns {number}
   */
  function minRunLength(n) {
    let r = 0
    while (n >= MIN_MERGE) {
      r |= n & 1
      n >>= 1
    }
    return n + r
  }
  const n = arr.length
  const minRun = minRunLength(n)
  for (let i = 0; i < n; i += minRun) {
    insertionSort(i, Math.min(i + MIN_MERGE - 1, n - 1))
  }
  let mid, right
  for (let size = minRun; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      mid = left + size - 1
      right = Math.min(left + 2 * size - 1, n - 1)
      if (mid < right) merge(left, mid, right)
    }
  }
}
const MIN_MERGE = 32
