class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val)
    this.minStack.push(Math.min(this.minStack.at(-1) ?? Infinity, val))
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop()
    this.minStack.pop()
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1)
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack.at(-1)
  }
}
