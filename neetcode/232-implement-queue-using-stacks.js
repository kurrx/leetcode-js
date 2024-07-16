class MyQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
    this.front = null
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.stack1.length === 0) this.front = x
    this.stack1.push(x)
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop()
  }

  /**
   * @return {number}
   */
  peek() {
    if (this.stack2.length) {
      return this.stack2.at(-1)
    }
    return this.front
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0
  }
}
