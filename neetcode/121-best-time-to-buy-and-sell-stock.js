/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const n = prices.length
  let maxSoFar = prices[n - 1],
    max = 0
  for (let i = n - 2; i >= 0; i--) {
    max = Math.max(max, maxSoFar - prices[i])
    maxSoFar = Math.max(maxSoFar, prices[i])
  }
  return max
}
