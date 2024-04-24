// https://leetcode.com/problems/moving-average-from-data-stream

class MovingAverage {
  /**
   * @param {number} size
   */
  constructor(size) {
    this.size = size
    this.sum = 0
    this.queue = []
  }

  /**
   * TC: O(n)
   * SC: O(1)
   *
   * @param {number} val
   */
  next(val) {
    this.sum += val
    this.queue.push(val)
    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift()
    }
    return this.sum / Math.min(this.size, this.queue.length)
  }
}
