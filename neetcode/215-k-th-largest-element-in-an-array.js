/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  // Min Heap
  const heap = new MinHeap()

  // Build our heap up to k elements
  for (const num of nums) {
    heap.push(num)
    if (heap.size > k) {
      // Remove min
      heap.pop()
    }
  }

  // Return k-th largest
  return heap.peek()
}
