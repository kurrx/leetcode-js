/**
 * https://leetcode.com/problems/maximum-number-of-robots-within-budget
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} times
 * @param {number[]} costs
 * @param {number} budget
 * @return {number}
 */
function maximumRobots(chargeTimes, runningCosts, budget) {
  const n = chargeTimes.length,
    stack = []
  let sum = 0,
    j = 0
  for (let i = 0; i < n; i++) {
    sum += runningCosts[i]
    while (stack.length && chargeTimes[stack.at(-1)] <= chargeTimes[i]) {
      stack.pop()
    }
    stack.push(i)
    if (chargeTimes[stack[0]] + (i - j + 1) * sum > budget) {
      if (stack[0] === j) stack.shift()
      sum -= runningCosts[j++]
    }
  }
  return n - j
}
