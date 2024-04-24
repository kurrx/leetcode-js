/**
 * https://leetcode.com/problems/largest-divisible-subset
 *
 * TC: O(n^2)
 * SC: O(n^2)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function largestDivisibleSubset(nums) {
  const n = nums.length
  if (n === 0) return []

  nums.sort((a, b) => a - b)
  const dp = new Array(n)

  for (let i = 0; i < n; i++) {
    let maxSubset = []
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] !== 0) continue
      if (maxSubset.length >= dp[j].length) continue
      maxSubset = dp[j]
    }
    dp[i] = [...maxSubset, nums[i]]
  }

  let max = []
  for (let i = 0; i < n; i++) {
    if (dp[i].length > max.length) {
      max = dp[i]
    }
  }
  return max
}
