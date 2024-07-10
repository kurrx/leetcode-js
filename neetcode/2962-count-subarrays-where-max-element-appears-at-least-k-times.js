/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countSubarrays(nums, k) {
  const max = nums.reduce((a, b) => Math.max(a, b))
  let answer = 0,
    maxElementsInWindow = 0
  for (let start = 0, end = 0; end < nums.length; end++) {
    if (nums[end] === max) maxElementsInWindow++
    while (k === maxElementsInWindow) {
      if (nums[start] === max) maxElementsInWindow--
      start++
    }
    answer += start
  }
  return answer
}
