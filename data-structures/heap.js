class Heap {
  /**
   * @param {(a: number, b: number) => number} comparator
   */
  constructor(comparator = (a, b) => a - b) {
    this.heap = []
    this.comparator = comparator
  }

  /**
   * Creates heap from given arr
   *
   * @param {number[]} arr
   * @param {(a: number, b: number) => number} comparator
   */
  static from(arr, comparator = (a, b) => a - b) {
    const heap = new Heap(comparator)
    heap.heap = [...arr]
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapifyDown(i)
    }
  }

  /**
   * Returns heap size
   *
   * @returns {number}
   */
  get size() {
    return this.heap.length
  }

  /**
   * Pushes new element to heap
   *
   * @param {number} value
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
   * @returns {number | undefined}
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
   * @returns {number | undefined}
   */
  peek() {
    return this.heap[0]
  }

  /**
   * Returns `boolean` value identifying is heap empty or not
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.size === 0
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
