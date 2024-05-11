/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length,
    answer = []
  for (let i = 0; i < n; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) continue
    const target = -nums[i]
    let left = i + 1,
      right = n - 1
    while (left < right) {
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++
        continue
      }
      if (right < n - 1 && nums[right] === nums[right + 1]) {
        right--
        continue
      }
      const sum = nums[left] + nums[right]
      if (sum === target) answer.push([nums[i], nums[left++], nums[right--]])
      else if (sum < target) left++
      else right--
    }
  }
  return answer
}
