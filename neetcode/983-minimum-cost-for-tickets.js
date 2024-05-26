/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
  const n = days.length,
    lastDay = days.at(-1),
    dp = new Array(lastDay + 1).fill(0)
  let i = 0
  for (let day = 1; day <= lastDay; day++) {
    if (day < days[i]) {
      dp[day] = dp[day - 1]
    } else {
      i++
      dp[day] = Math.min(
        dp[day - 1] + costs[0],
        dp[Math.max(0, day - 7)] + costs[1],
        dp[Math.max(0, day - 30)] + costs[2],
      )
    }
  }
  return dp[lastDay]
}
