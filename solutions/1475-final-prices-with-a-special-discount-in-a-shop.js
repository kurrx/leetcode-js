/**
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
  const n = prices.length,
    discounts = new Array(n),
    stack = [0]
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }
    discounts[i] = prices[i] - stack[stack.length - 1]
    stack.push(prices[i])
  }
  return discounts
}
