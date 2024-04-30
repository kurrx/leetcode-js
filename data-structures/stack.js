/**
 * JS Native arrays works as deque, so implementation below is just abstraction on top of it
 */
class Stack {
  constructor() {
    this.stack = []
  }

  /**
   * Returns size of stack
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number}
   */
  get size() {
    return this.stack.length
  }

  /**
   * Appends new element to the top of a stack, and returns the new size of stack
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @param {number} value
   * @returns {number}
   */
  push(value) {
    return this.stack.push(value)
  }

  /**
   * Removes the top element from a stack and returns it. If the stack is empty, undefined is returned
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  pop() {
    return this.stack.pop()
  }

  /**
   * Returns the top element of a stack. If the stack is empty, undefined is returned
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  top() {
    return this.stack.at(-1)
  }

  /**
   * Clears stack
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {void}
   */
  clear() {
    this.stack = []
  }
}
