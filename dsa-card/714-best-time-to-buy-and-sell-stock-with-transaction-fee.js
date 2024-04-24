/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
  let free = 0,
    hold = -prices[0],
    temp
  for (let i = 1; i < prices.length; i++) {
    temp = hold
    hold = Math.max(hold, free - prices[i])
    free = Math.max(free, temp + prices[i] - fee)
  }
  return free
}
