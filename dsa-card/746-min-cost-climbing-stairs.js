/**
 * https://leetcode.com/problems/min-cost-climbing-stairs
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  let oneBack = cost[1],
    twoBack = cost[0],
    answer
  for (let i = 2; i <= cost.length; i++) {
    answer = Math.min(oneBack, twoBack) + (cost[i] ?? 0)
    twoBack = oneBack
    oneBack = answer
  }
  return answer
}
