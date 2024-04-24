// https://leetcode.com/problems/online-stock-span

class StockSpanner {
  constructor() {
    this.stack = []
    this.day = 0
  }

  /**
   * TC: O(1)
   * SC: O(n)
   *
   * @param {number} price
   */
  next(price) {
    let days = 1
    while (
      this.stack.length &&
      this.stack[this.stack.length - 1].price <= price
    ) {
      days += this.stack.pop().days
    }
    this.stack.push({ price, days })
    return days
  }
}
