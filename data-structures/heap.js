/**
 * Min/Max Heap Implementation
 */
class Heap {
  /**
   * @param {number[]} arr
   * @param {boolean} maxHeap
   */
  constructor(arr, maxHeap = false) {
    this._maxHeap = maxHeap
    this._heap = arr.map(x => (this._maxHeap ? -x : x))
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
      this._heapifyDown(i)
    }
  }

  /**
   * Pushes new element to heap
   *
   * @param {number} value
   * @returns {void}
   */
  push(value) {
    this._heap.push(this._maxHeap ? -value : value)
    let curr = this._heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (this._heap[curr] < this._heap[parent]) {
        this._swap(curr, parent)
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
    this._swap(0, this._heap.length - 1)
    const removedValue = this._heap.pop()
    this._heapifyDown(0)
    return this._maxHeap ? -removedValue : removedValue
  }

  /**
   * Heapify arr at `index`
   *
   * @private
   * @param {number} index
   * @returns {void}
   */
  _heapifyDown(index) {
    const n = this._heap.length
    let curr = index
    while (2 * curr + 1 < n) {
      const leftIndex = 2 * curr + 1,
        rightIndex = 2 * curr + 2,
        minIndex =
          rightIndex < n && this._heap[rightIndex] < this._heap[leftIndex]
            ? rightIndex
            : leftIndex
      if (this._heap[minIndex] < this._heap[curr]) {
        this._swap(minIndex, curr)
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
  _swap(index1, index2) {
    const temp = this._heap[index1]
    this._heap[index1] = this._heap[index2]
    this._heap[index2] = temp
  }
}
