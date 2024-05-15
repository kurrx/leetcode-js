/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  let oneBack = cost[1],
    twoBack = cost[0],
    temp
  for (let i = 2; i <= cost.length; i++) {
    temp = oneBack
    oneBack = Math.min(oneBack, twoBack) + (cost[i] ?? 0)
    twoBack = temp
  }
  return oneBack
}
