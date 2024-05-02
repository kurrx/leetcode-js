/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  function maxCanRobFrom(from, to) {
    let twoBack = 0,
      oneBack = nums[from],
      temp
    for (let i = from + 1; i < to; i++) {
      temp = oneBack
      oneBack = Math.max(oneBack, nums[i] + twoBack)
      twoBack = temp
    }
    return oneBack
  }

  const n = nums.length
  if (n <= 3) return Math.max(...nums)

  return Math.max(maxCanRobFrom(0, n - 1), maxCanRobFrom(1, n))
}
