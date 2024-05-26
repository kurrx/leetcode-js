class MyCircularQueue {
  /**
   * @param {number} k
   */
  constructor(k) {
    this.size = 0
    this.left = 0
    this.right = 0
    this.arr = new Array(k)
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) return false
    this.arr[this.right] = value
    this.right = (this.right + 1) % this.arr.length
    this.size++
    return true
  }

  /**
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false
    this.left = (this.left + 1) % this.arr.length
    this.size--
    return true
  }

  /**
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) return -1
    return this.arr[this.left]
  }

  /**
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) return -1
    return this.arr.at(this.right - 1)
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.size === this.arr.length
  }
}
