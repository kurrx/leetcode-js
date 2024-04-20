/**
 * https://leetcode.com/problems/maximum-running-time-of-n-computers
 *
 * TC: O(n*log(k))
 * SC: O(1)
 *
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
function maxRunTime(n, batteries) {
  let powerSum = 0
  for (const power of batteries) {
    powerSum += power
  }
  let left = 1,
    right = Math.floor(powerSum / n)
  while (left < right) {
    const mid = right - Math.floor((right - left) / 2)
    let extra = 0
    for (const power of batteries) {
      extra += Math.min(power, mid)
    }
    if (extra >= mid * n) left = mid
    else right = mid - 1
  }
  return left
}
