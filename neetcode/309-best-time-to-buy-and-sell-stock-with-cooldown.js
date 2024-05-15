/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const n = prices.length
  let oneBack = [0, 0],
    twoBack = [0, 0],
    temp = [0, 0]
  for (let i = n - 1; i >= 0; i--) {
    temp[0] = oneBack[0]
    temp[1] = oneBack[1]
    oneBack[0] = Math.max(oneBack[0], oneBack[1] - prices[i])
    oneBack[1] = Math.max(oneBack[1], twoBack[0] + prices[i])
    twoBack[0] = temp[0]
    twoBack[1] = temp[1]
  }
  return oneBack[0]
}
