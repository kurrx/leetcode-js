/**
 * https://leetcode.com/problems/maximum-ice-cream-bars
 *
 * TC: O(n*log(n))
 * SC: O(log(n))
 *
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
function maxIceCream(costs, coins) {
  costs.sort((a, b) => a - b)
  let totalIceCreams = 0
  for (let i = 0; i < costs.length; i++) {
    if (coins < costs[i]) break
    coins -= costs[i]
    totalIceCreams++
  }
  return totalIceCreams
}
