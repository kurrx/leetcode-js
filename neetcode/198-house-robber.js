/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  const n = nums.length
  if (n <= 2) return Math.max(...nums)

  let twoBack = 0,
    oneBack = 0,
    temp
  for (let i = 0; i < n; i++) {
    temp = oneBack
    oneBack = Math.max(oneBack, nums[i] + twoBack)
    twoBack = temp
  }

  return oneBack
}
