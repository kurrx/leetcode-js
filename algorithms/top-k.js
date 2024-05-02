/**
 * Find Top K Minimum Elements (Example)
 *
 * Time Complexity: O(n log k)
 * Space Complexity: O(k)
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
function topKElement(arr) {
  const minHeap = new Heap()
  for (const num of arr) {
    minHeap.push(num)
    if (minHeap.size > k) {
      minHeap.pop()
    }
  }
  return minHeap.heap
}
