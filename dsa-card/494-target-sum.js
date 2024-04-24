/**
 * https://leetcode.com/problems/target-sum
 *
 * TC: O(n*t)
 * SC: O(n*t)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  function dp(i, curr) {
    if (i === n) {
      if (curr === 0) return 1
      return 0
    }
    if (memo[i].has(curr)) {
      return memo[i].get(curr)
    }

    const answer = dp(i + 1, curr - nums[i]) + dp(i + 1, curr + nums[i])
    memo[i].set(curr, answer)

    return answer
  }
  const n = nums.length
  if (!n) return 0
  const memo = new Array(n)
  for (let i = 0; i < n; i++) {
    memo[i] = new Map()
  }
  return dp(0, target)
}
