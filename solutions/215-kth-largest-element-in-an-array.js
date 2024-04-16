/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 *
 * TC: O(n*log(k))
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
function findKthLargest(numbers, k) {
  const maxHeap = new Heap([])
  for (const number of numbers) {
    maxHeap.push(number)
    if (maxHeap._heap.length > k) {
      maxHeap.pop()
    }
  }
  return maxHeap.pop()
}
