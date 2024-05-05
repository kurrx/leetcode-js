class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k
    this.heap = []
    for (const num of nums) {
      this.heappush(num)
      if (this.heap.length > this.k) {
        this.heappop()
      }
    }
  }

  /**
   * @param {number} i
   * @param {number} j
   * @returns {void}
   */
  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  /**
   * @param {number} val
   * @returns {void}
   */
  heappush(val) {
    this.heap.push(val)
    let curr = this.heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (this.heap[curr] < this.heap[parent]) {
        this.swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }

  /**
   * @returns {number}
   */
  heappop() {
    this.swap(0, this.heap.length - 1)
    const min = this.heap.pop(),
      n = this.heap.length
    let curr = 0
    while (curr * 2 + 1 < n) {
      const leftIndex = curr * 2 + 1,
        rightIndex = curr * 2 + 2,
        minIndex =
          rightIndex < n && this.heap[rightIndex] < this.heap[leftIndex]
            ? rightIndex
            : leftIndex
      if (this.heap[minIndex] < this.heap[curr]) {
        this.swap(minIndex, curr)
        curr = minIndex
      } else {
        break
      }
    }
    return min
  }

  /**
   * @param {number} val
   * @returns {number}
   */
  add(val) {
    this.heappush(val)
    if (this.heap.length > this.k) {
      this.heappop()
    }
    return this.heap[0]
  }
}
