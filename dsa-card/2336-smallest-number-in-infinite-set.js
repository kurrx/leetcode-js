/**
 * https://leetcode.com/problems/smallest-number-in-infinite-set
 *
 * TC: O(m*log(n))
 * SC: O(n)
 */
class SmallestInfiniteSet {
  constructor() {
    this.smallest = 1
    this.heap = new Heap()
  }

  popSmallest() {
    if (!this.heap.isEmpty()) {
      const smallest = this.heap.pop()
      while (this.heap.peek() === smallest) {
        this.heap.pop()
      }
      return smallest
    }
    const number = this.smallest
    this.smallest++
    return number
  }

  addBack(number) {
    if (number >= this.smallest) return
    this.heap.push(number)
  }
}
