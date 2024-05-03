/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length,
    answer = new Array(n)
  // Calculate suffix
  answer[n - 1] = 1
  for (let i = n - 2; i >= 0; i--) {
    answer[i] = answer[i + 1] * nums[i + 1]
  }
  // Calculate prefix and answer
  let prefix = 1
  for (let i = 0; i < n; i++) {
    answer[i] *= prefix
    prefix *= nums[i]
  }
  return answer
}
