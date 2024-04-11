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
function maximumRobots(times, costs, budget) {
  const n = times.length
  const deque = []
  let left = 0,
    sum = 0
  for (let right = 0; right < n; right++) {
    sum += costs[right]
    while (deque.length && times[deque.at(-1)] <= times[right]) {
      deque.pop()
    }
    deque.push(right)
    if (times[deque[0]] + (right - left + 1) * sum > budget) {
      if (deque[0] === left) {
        deque.shift()
      }
      sum -= costs[left++]
    }
  }
  return n - left
}
