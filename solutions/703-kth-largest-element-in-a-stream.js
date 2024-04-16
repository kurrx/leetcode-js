/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream
 *
 * TC: O(n*log(k))
 * SC: O(k)
 */

class KthLargest {
  /**
   * @param {number} k
   * @param {number} numbers
   */
  constructor(k, numbers) {
    this.k = k
    this.heap = new Heap([])
    for (const number of numbers) {
      this.add(number)
    }
  }

  /**
   * @param {number} value
   * @returns {number}
   */
  add(value) {
    this.heap.push(value)
    if (this.heap.size() > this.k) {
      this.heap.pop()
    }
    return this.heap.peek()
  }
}
