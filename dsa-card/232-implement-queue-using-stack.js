// https://leetcode.com/problems/implement-queue-using-stacks

class MyQueue {
  constructor() {
    this.s1 = []
    this.s2 = []
  }

  /**
   * TC: O(n)
   * SC: O(n)
   *
   * @param {number} x
   * @return {void}
   */
  push(x) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
    this.s1.push(x)
    while (this.s2.length) {
      this.s1.push(this.s2.pop())
    }
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {number}
   */
  pop() {
    return this.s1.pop()
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {number}
   */
  peek() {
    return this.s1[this.s1.length - 1]
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @return {boolean}
   */
  empty() {
    return this.s1.length === 0
  }
}
