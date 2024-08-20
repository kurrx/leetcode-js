/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxFrequency(nums, k) {
  nums.sort((a, b) => a - b)
  let answer = 0,
    curr = 0
  for (let left = 0, right = 0; right < nums.length; right++) {
    curr += nums[right]
    while ((right - left + 1) * nums[right] - curr > k) {
      curr -= nums[left++]
    }
    answer = Math.max(answer, right - left + 1)
  }
  return answer
}
