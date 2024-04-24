// https://leetcode.com/problems/implement-stack-using-queues

class MyStack {
  constructor() {
    this.queue = []
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.queue.push(x)
    let n = this.queue.length
    while (n > 1) {
      this.queue.push(this.queue.shift())
      n--
    }
  }

  /**
   * TC: O(n)
   * SC: O(1)
   *
   * @return {number}
   */
  pop() {
    return this.queue.shift()
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {number}
   */
  top() {
    return this.queue[0]
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {boolean}
   */
  empty() {
    return this.queue.length === 0
  }
}
