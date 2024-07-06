/**
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
  costs.sort((a, b) => a[0] - b[0] - (a[1] - b[1]))
  let total = 0
  for (let i = 0; i < costs.length; i++) {
    if (i >= costs.length / 2) {
      total += costs[i][1]
    } else {
      total += costs[i][0]
    }
  }
  return total
}
