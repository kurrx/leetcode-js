/**
 * JS Native arrays works as deque, but dequeue(shift) is done in O(n).
 * Implementation below utilizes Doubly Linked List to achieve O(1) dequeue(shift).
 */
class Queue {
  constructor() {
    this.list = new DoublyLinkedList()
  }

  /**
   * Returns size of queue
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
   * Appends new element to the end of a queue, and returns the new size of queue
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @param {number} value
   * @returns {number}
   */
  enqueue(value) {
    return this.list.push(value)
  }

  /**
   * Removes the front element from a queue and returns it. If the queue is empty, undefined is returned
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  dequeue() {
    return this.list.shift()
  }

  /**
   * Returns the front element of a queue. If the queue is empty, undefined is returned
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
   * Clears queue
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
