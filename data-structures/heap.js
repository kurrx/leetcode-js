/**
 * Min Heap Implementation
 *
 * @description For max heap `push`, `pop` methods must be negative
 */
class Heap {
  /**
   * @param {number[]} arr
   */
  constructor(arr, inPlace = false) {
    const last = Math.floor(arr.length / 2 - 1)
    this.heap = inPlace ? arr : [...arr]
    // Uncomment for MaxHeap
    // this.heap = arr.map(x => -x)
    for (let i = last; i >= 0; i--) {
      this._percolateDown(i)
    }
  }

  /**
   * Pushes new element to heap
   *
   * @param {number} value
   * @returns {void}
   */
  push(value) {
    this.heap.push(value)
    // Uncomment for MaxHeap
    // this.heap.push(-value)
    let curr = this.heap.length - 1
    while (curr > 0) {
      let parent = (curr - 1) / 2
      if (this.heap[curr] < this.heap[parent]) {
        this._swapAt(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }

  /**
   * Pops min element from heap
   *
   * @returns {void}
   */
  pop() {
    this._swapAt(0, this.heap.length - 1)
    const removedValue = this.heap.pop()
    this._percolateDown(0)
    return removedValue
    // Uncomment for MaxHeap
    // return -removedValue
  }

  /**
   * Heapify arr at `index`
   *
   * @private
   * @param {number} index
   * @returns {void}
   */
  _percolateDown(index) {
    const n = this.heap.length
    let curr = index
    while (2 * curr + 1 < n) {
      const leftIndex = 2 * curr + 1,
        rightIndex = 2 * curr + 2,
        minIndex =
          rightIndex < n && this.heap[rightIndex] < this.heap[leftIndex]
            ? rightIndex
            : leftIndex
      if (this.heap[minIndex] < this.heap[curr]) {
        this._swapAt(minIndex, curr)
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
  _swapAt(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
}
