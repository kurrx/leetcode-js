// https://leetcode.com/problems/min-stack

class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
    this.n = 0
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @param {number} val
   */
  push(val) {
    this.stack.push(val)
    this.minStack.push(Math.min(val, this.minStack[this.n - 1] ?? Infinity))
    this.n++
  }

  /**
   * TC: O(1)
   * SC: O(1)
   */
  pop() {
    this.stack.pop()
    this.minStack.pop()
    this.n--
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {number}
   */
  top() {
    return this.stack[this.n - 1]
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {number}
   */
  getMin() {
    return this.minStack[this.n - 1]
  }
}
