/**
 * In-place bucket sort (example below sorts floats)
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n+k)
 *
 * @param {number[]} arr
 * @returns {void}
 */
function bucketSort(arr) {
  const n = arr.length,
    buckets = []
  for (let i = 0; i < n; i++) buckets.push([])
  for (let i = 0; i < n; i++) buckets[Math.floor(n * arr[i])].push(arr[i])
  for (let i = 0; i < n; i++) insertionSort(buckets[i])
  let idx = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[idx++] = buckets[i][j]
    }
  }
}
