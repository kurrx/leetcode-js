/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let min = Infinity,
    sum = 0
  for (let left = 0, right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      min = Math.min(min, right - left + 1)
      sum -= nums[left++]
    }
  }
  return min === Infinity ? 0 : min
}
