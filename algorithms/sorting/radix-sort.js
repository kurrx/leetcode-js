/**
 * In-place radix sort
 *
 * Time Complexity: O(nk)
 * Space Complexity: O(nk)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function radixSort(arr) {
  /**
   * @param {number} exp
   * @returns {void}
   */
  function countingSort(exp) {
    const output = new Array(n),
      count = new Array(10).fill(0)
    for (let i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++
    for (let i = 1; i < 10; i++) count[i] += count[i - 1]
    let idx
    for (let i = n - 1; i >= 0; i--) {
      idx = Math.floor(arr[i] / exp) % 10
      output[count[idx] - 1] = arr[i]
      count[idx]--
    }
    for (let i = 0; i < n; i++) arr[i] = output[i]
  }
  const n = arr.length
  let max = arr[0]
  for (let i = 1; i < n; i++) if (arr[i] > max) max = arr[i]
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) countingSort(exp)
}
