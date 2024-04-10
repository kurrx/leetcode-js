// https://leetcode.com/problems/min-stack

class MinStack {
  constructor() {
    this.stack = []
    this.min = []
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @param {number} val
   */
  push(val) {
    this.stack.push(val)
    const n = this.min.length
    if (!n || val < this.min[n - 1].val) {
      this.min.push({ val, count: 1 })
    } else if (val === this.min[n - 1].val) {
      this.min[n - 1].count++
    }
  }

  /**
   * TC: O(1)
   * SC: O(1)
   */
  pop() {
    const minTop = this.min[this.min.length - 1]
    if (minTop.val === this.stack.pop()) {
      if (minTop.count === 1) {
        this.min.pop()
      } else {
        minTop.count--
      }
    }
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1]
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1].val
  }
}
