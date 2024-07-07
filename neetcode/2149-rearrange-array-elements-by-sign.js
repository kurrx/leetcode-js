/**
 * @param {number[]} nums
 * @return {number[]}
 */
function rearrangeArray(nums) {
  const answer = new Array(nums.length)
  let positive = 0,
    negative = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      answer[positive] = nums[i]
      positive += 2
    } else {
      answer[negative] = nums[i]
      negative += 2
    }
  }
  return answer
}
