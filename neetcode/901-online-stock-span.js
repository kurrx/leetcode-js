class StockSpanner {
  constructor() {
    this.stack = []
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let days = 1
    while (this.stack.length && this.stack.at(-1)[0] <= price) {
      days += this.stack.pop()[1]
    }
    this.stack.push([price, days])
    return days
  }
}
