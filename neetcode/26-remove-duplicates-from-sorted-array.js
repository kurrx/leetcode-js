/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const n = nums.length
  let k = 0
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[k]) {
      k++
      nums[k] = nums[i]
    }
  }
  return k + 1
}
