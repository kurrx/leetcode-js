/**
 * https://leetcode.com/problems/minimum-cost-to-connect-sticks
 *
 * TC: O(n*log(n))
 * SC: O(n)
 *
 * @param {number[]} sticks
 * @return {number}
 */
function connectSticks(sticks) {
  const minHeap = new Heap(sticks)
  let cost = 0
  while (minHeap._heap.length > 1) {
    const total = minHeap.pop() + minHeap.pop()
    cost += total
    minHeap.push(total)
  }
  return cost
}
