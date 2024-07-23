/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let j = 1,
    count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++
    } else {
      count = 1
    }
    if (count <= 2) {
      nums[j++] = nums[i]
    }
  }
  return j
}
