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
    stack = []
  const answer = new Array(n)
  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || prices[stack.at(-1)] >= prices[i])) {
      const j = stack.pop()
      answer[j] = prices[j] - (prices[i] ?? 0)
    }
    stack.push(i)
  }
  return answer
}
