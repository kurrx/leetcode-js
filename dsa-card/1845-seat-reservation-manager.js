/**
 * https://leetcode.com/problems/seat-reservation-manager
 *
 * TC: O(m*log(n))
 * SC: O(n)
 */

class SeatManager {
  /**
   * @param {number} n
   */
  constructor(n) {
    this.marker = 1
    this.heap = new Heap()
  }

  /**
   * @returns {number}
   */
  reserve() {
    if (!this.heap.isEmpty()) {
      return this.heap.pop()
    }
    const seatNumber = this.marker
    this.marker++
    return seatNumber
  }

  /**
   * @param {number} seatNumber
   * @returns {void}
   */
  unreserve(seatNumber) {
    this.heap.push(seatNumber)
  }
}
