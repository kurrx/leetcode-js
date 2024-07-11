class SeatManager {
  /**
   * @param {number} n
   */
  constructor(n) {
    this.n = n
    this.reservedUpTo = 0
    this.heap = []
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {boolean}
   */
  lt(i, j) {
    return this.heap[i] < this.heap[j]
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {void}
   */
  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  /**
   * @param {number} seat
   * @return {void}
   */
  push(seat) {
    this.heap.push(seat)
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
   * @return {number}
   */
  pop() {
    this.swap(0, this.heap.length - 1)
    const minSeat = this.heap.pop()
    let curr = 0
    while (2 * curr + 1 < this.heap.length) {
      const leftIndex = 2 * curr + 1,
        rightIndex = 2 * curr + 2,
        minIndex =
          rightIndex < this.heap.length && this.lt(rightIndex, leftIndex)
            ? rightIndex
            : leftIndex
      if (this.lt(minIndex, curr)) {
        this.swap(minIndex, curr)
        curr = minIndex
      } else {
        break
      }
    }
    return minSeat
  }

  /**
   * @return {number}
   */
  reserve() {
    if (this.heap.length || this.reservedUpTo >= this.n) {
      return this.pop()
    }
    return ++this.reservedUpTo
  }

  /**
   * @param {number} seatNumber
   * @return {void}
   */
  unreserve(seatNumber) {
    this.push(seatNumber)
  }
}
