/**
 * @param {number[]} nums
 * @return {number}
 */
function maxCoins(nums) {
  // Special Case: only one number, only one burst
  if (nums.length === 1) return nums[0]
  // Special Case: all numbers same
  let allSame = true
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      allSame = false
      break
    }
  }
  if (allSame) return nums[0] ** 3 * (nums.length - 2) + nums[0] ** 2 + nums[0]

  // Edge Case
  nums.unshift(1)
  nums.push(1)
  // Table
  const n = nums.length,
    dp = []
  for (let i = 0; i < n; i++) dp.push(new Array(n).fill(0))
  // DP
  for (let left = n - 2; left >= 1; left--) {
    for (let right = left; right < n - 1; right++) {
      for (let i = left; i <= right; i++) {
        dp[left][right] = Math.max(
          dp[left][right],
          dp[left][i - 1] +
            dp[i + 1][right] +
            nums[left - 1] * nums[i] * nums[right + 1],
        )
      }
    }
  }

  // Remove Edge Cases
  nums.shift()
  nums.pop()
  return dp[1][n - 2]
}
