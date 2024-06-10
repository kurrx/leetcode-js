/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function combinationSum4(nums, target) {
  const n = nums.length,
    dp = new Array(target + 1)
  dp[target] = 1
  for (let sum = target - 1; sum >= 0; sum--) {
    dp[sum] = 0
    for (let i = 0; i < n; i++) {
      if (sum + nums[i] <= target) {
        dp[sum] += dp[sum + nums[i]] ?? 0
      }
    }
  }
  return dp[0]
}
