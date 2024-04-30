/**
 * JS Native arrays works as deque, but pushFront(unshift) and popFront(shift) is done in O(n).
 * Implementation below utilizes Doubly Linked List to achieve O(1) pushFront(unshift) and popFront(shift).
 */
class Deque {
  constructor() {
    this.list = new DoublyLinkedList()
  }

  /**
   * Returns size of deque
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number}
   */
  get size() {
    return this.list.length
  }

  /**
   * Appends new element to the front of a deque, and returns the new size of deque
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @param {number} value
   * @returns {number}
   */
  pushFront(value) {
    return this.list.unshift(value)
  }

  /**
   * Removes the front element from a deque and returns it. If the deque is empty, undefined is returned
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  popFront() {
    return this.list.shift()
  }

  /**
   * Returns the front element of a deque. If the deque is empty, undefined is returned
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  front() {
    return this.list.at(0)
  }

  /**
   * Appends new element to the back of a deque, and returns the new size of deque
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @param {number} value
   * @returns {number}
   */
  pushBack(value) {
    return this.list.push(value)
  }

  /**
   * Removes the back element from a deque and returns it. If the deque is empty, undefined is returned
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  popBack() {
    return this.list.pop()
  }

  /**
   * Returns the back element of a deque. If the deque is empty, undefined is returned
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  back() {
    return this.list.at(this.list.length - 1)
  }

  /**
   * Clears deque
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {void}
   */
  clear() {
    this.list.clear()
  }
}
