/**
 * https://leetcode.com/problems/house-robber-ii
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  function robFromTo(start, end) {
    let oneBack = 0,
      twoBack = 0,
      temp
    for (let i = start; i <= end; i++) {
      temp = oneBack
      oneBack = Math.max(oneBack, twoBack + nums[i])
      twoBack = temp
    }
    return oneBack
  }
  const n = nums.length
  if (n <= 3) return Math.max(...nums)
  return Math.max(robFromTo(0, n - 2), robFromTo(1, n - 1))
}
