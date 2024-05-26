/**
 * @param {number[]} nums
 * @return {boolean}
 */
function validPartition(nums) {
  const n = nums.length
  const dp = [false, false, false]
  dp[0] = true
  for (let i = 0; i < n; i++) {
    const dpIndex = i + 1
    let answer = false
    if (nums[i] === nums[i - 1]) {
      answer ||= dp[(dpIndex - 2) % 3]
      if (nums[i] === nums[i - 2]) {
        answer ||= dp[(dpIndex - 3) % 3]
      }
    } else if (nums[i] === nums[i - 1] + 1 && nums[i] === nums[i - 2] + 2) {
      answer ||= dp[(dpIndex - 3) % 3]
    }
    dp[dpIndex % 3] = answer
  }
  return dp[n % 3]
}
