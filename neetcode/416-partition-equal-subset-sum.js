/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const n = nums.length
  // Edge 1: If numbers is less than we need
  if (n <= 1) return false

  // Pre-process
  let total = 0
  for (const num of nums) total += num

  // If total is not even then it's not divisible by 2
  if (total % 2) return false

  // DP
  const target = total / 2
  const dp = [
    new Array(target + 1).fill(false),
    new Array(target + 1).fill(false),
  ]
  dp[0][0] = true
  let prevIdx = 0
  for (let i = 0; i < n; i++) {
    for (let sum = 0; sum <= target; sum++) {
      dp[1 - prevIdx][sum] ||= dp[prevIdx][sum]
      if (sum - nums[i] >= 0)
        dp[1 - prevIdx][sum] ||= dp[prevIdx][sum - nums[i]]
    }
    prevIdx = 1 - prevIdx
  }
  return dp[prevIdx][target]
}
