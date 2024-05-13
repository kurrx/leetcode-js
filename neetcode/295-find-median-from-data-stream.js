class Heap {
  constructor(comparator) {
    this.comparator = comparator
    this.heap = []
  }

  /**
   * @return {number}
   */
  get top() {
    return this.heap[0]
  }

  /**
   * @return {number}
   */
  get size() {
    return this.heap.length
  }

  /**
   * @return {boolean}
   */
  get isEmpty() {
    return this.size === 0
  }

  /**
   * @param {number} num
   * @return {void}
   */
  push(num) {
    this.heap.push(num)
    let curr = this.size - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (this.lt(curr, parent)) {
        this.swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }

  /**
   * @return {number}
   */
  pop() {
    this.swap(0, this.size - 1)
    const top = this.heap.pop()
    let curr = 0
    while (2 * curr + 1 < this.size) {
      const left = 2 * curr + 1,
        right = 2 * curr + 2,
        peek = right < this.size && this.lt(right, left) ? right : left
      if (this.lt(peek, curr)) {
        this.swap(peek, curr)
        curr = peek
      } else {
        break
      }
    }
    return top
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {void}
   */
  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {boolean}
   */
  lt(i, j) {
    return this.comparator(this.heap[i], this.heap[j])
  }
}

class MedianFinder {
  constructor() {
    this.min = new Heap((a, b) => a < b)
    this.max = new Heap((a, b) => b < a)
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.max.push(num)
    this.min.push(this.max.pop())
    if (this.min.size > this.max.size) {
      this.max.push(this.min.pop())
    }
  }

  /**
   * @return {number}
   */
  findMedian(num) {
    if (this.min.size === this.max.size) {
      return (this.min.top + this.max.top) / 2
    }
    return this.max.top
  }
}
