/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  const n = nums.length
  let total = 0
  for (let i = 0; i < n; i++) total += nums[i]
  let prevDp = new Map(
    nums[0] === 0
      ? [[total, 2]]
      : [
          [total + nums[0], 1],
          [total - nums[0], 1],
        ],
  )
  let temp, prev
  for (let i = 1; i < n; i++) {
    const dp = new Map()
    for (let sum = -total; sum <= total; sum++) {
      temp = sum + total
      prev = prevDp.get(temp) ?? 0
      if (prev > 0) {
        dp.set(temp + nums[i], (dp.get(temp + nums[i]) ?? 0) + prev)
        dp.set(temp - nums[i], (dp.get(temp - nums[i]) ?? 0) + prev)
      }
    }
    prevDp = dp
  }
  return Math.abs(target) > total ? 0 : prevDp.get(target + total) ?? 0
}
