/**
 * Counting sort
 *
 * Time Complexity: O(n+k)
 * Space Complexity: O(k)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function countingSort(arr) {
  const n = arr.length
  let max = arr[0]
  for (let i = 1; i < n; i++) if (arr[i] > max) max = arr[i]
  const counter = new Array(max + 1).fill(0)
  for (let i = 0; i < n; i++) counter[arr[i]]++
  for (let i = 1; i <= max; i++) counter[i] += counter[i - 1]
  const output = new Array(n)
  for (let i = n - 1; i >= 0; i--) {
    output[counter[arr[i]] - 1] = arr[i]
    counter[arr[i]]--
  }
  return output
}
