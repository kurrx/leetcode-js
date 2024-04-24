/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let sold = Number.MIN_SAFE_INTEGER,
    held = Number.MIN_SAFE_INTEGER,
    reset = 0,
    preSold
  for (const price of prices) {
    preSold = sold
    sold = held + price
    held = Math.max(held, reset - price)
    reset = Math.max(reset, preSold)
  }
  return Math.max(sold, reset)
}
