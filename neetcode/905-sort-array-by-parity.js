/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  const parity = new Array(nums.length)
  let even = 0,
    odd = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      parity[odd--] = nums[i]
    } else {
      parity[even++] = nums[i]
    }
  }
  return parity
}
