// https://leetcode.com/problems/online-stock-span

class StockSpanner {
  stack = []

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let answer = 1
    while (this.stack.length && price >= this.stack.at(-1)[0]) {
      answer += this.stack.pop()[1]
    }
    this.stack.push([price, answer])
    return answer
  }
}
