class MedianFinder {
  constructor() {
    this.min = new Heap((a, b) => a - b)
    this.max = new Heap((a, b) => b - a)
  }

  /**
   * Adds number to stream
   *
   * Time Complexity: O(log n)
   * Space Complexity: O(1)
   *
   * @param {number} num
   * @returns {void}
   */
  addNum(num) {
    this.max.push(num)
    this.min.push(this.max.pop())
    if (this.min.size > this.max.size) {
      this.max.push(this.min.pop())
    }
  }

  /**
   * Finds median of numbers added so far
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)s
   *
   * @returns {number}
   */
  findMedian() {
    if (this.max.size > this.min.size) {
      return this.max.peek()
    }
    return (this.min.peek() - this.max.peek()) / 2
  }
}
