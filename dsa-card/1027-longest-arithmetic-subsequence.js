/**
 * https://leetcode.com/problems/longest-arithmetic-subsequence
 *
 * TC: O(n^2)
 * SC: O(n^2)
 *
 * @param {number[]} nums
 * @return {number}
 */
function longestArithSeqLength(nums) {
  const n = nums.length,
    dp = new Array(n)
  let max = 0
  for (let right = 0; right < n; right++) {
    dp[right] = new Map()
    for (let left = 0; left < right; left++) {
      const diff = nums[right] - nums[left]
      const answer = (dp[left].get(diff) ?? 1) + 1
      dp[right].set(diff, answer)
      max = Math.max(max, answer)
    }
  }
  return max
}
