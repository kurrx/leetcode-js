/**
 * Min/Max Heap Implementation
 *
 * @template T
 */
class Heap {
  /**
   * @param {T[]} arr
   * @param {(a: T, b: T) => number} comparator
   */
  constructor(arr, comparator = (a, b) => a - b) {
    this.heap = [...arr]
    this.comparator = comparator
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
      this.heapifyDown(i)
    }
  }

  /**
   * Pushes new element to heap
   *
   * @param {T} value
   * @returns {void}
   */
  push(value) {
    this.heap.push(value)
    let curr = this.heap.length - 1
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
   * Pops min element from heap
   *
   * @returns {T | undefined}
   */
  pop() {
    if (this.isEmpty()) return undefined
    this.swap(0, this.heap.length - 1)
    const removedValue = this.heap.pop()
    this.heapifyDown(0)
    return removedValue
  }

  /**
   * Returns heap top value
   *
   * @returns {T}
   */
  peek() {
    return this.heap[0]
  }

  /**
   * Returns heap size
   *
   * @returns {number}
   */
  size() {
    return this.heap.length
  }

  /**
   * Returns `boolean` value identifying is heap empty or not
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * Heapify arr at `index`
   *
   * @private
   * @param {number} index
   * @returns {void}
   */
  heapifyDown(index) {
    const n = this.heap.length
    let curr = index
    while (2 * curr + 1 < n) {
      const leftIndex = 2 * curr + 1
      const rightIndex = 2 * curr + 2
      const minIndex =
        rightIndex < n && this.lt(rightIndex, leftIndex)
          ? rightIndex
          : leftIndex
      if (this.lt(minIndex, curr)) {
        this.swap(minIndex, curr)
        curr = minIndex
      } else {
        break
      }
    }
  }

  /**
   * Swaps two elements by `index`
   *
   * @private
   * @param {number} index1
   * @param {number} index2
   * @returns {void}
   */
  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  /**
   * Compares two elements by `comparator`
   *
   * @param {number} index1
   * @param {number} index2
   * @returns {boolean}
   */
  lt(index1, index2) {
    return this.comparator(this.heap[index1], this.heap[index2]) < 0
  }
}
