/**
 * In-place heap sort
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 */
function heapSort(arr) {
  function heapify(n, i) {
    let largest = i,
      left = 2 * i + 1,
      right = 2 * i + 2
    if (left < n && arr[left] > arr[largest]) largest = left
    if (right < n && arr[right] > arr[largest]) largest = right
    if (largest !== i) {
      let temp = arr[largest]
      arr[largest] = arr[i]
      arr[i] = temp
      heapify(n, largest)
    }
  }
  const n = arr.length
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i)
  }
  let temp
  for (let i = n - 1; i > 0; i--) {
    temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    heapify(i, 0)
  }
}
