/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const n = nums.length
  let arrSum = 0
  for (let i = 0; i < n; i++) arrSum += nums[i]
  return (n * (n + 1)) / 2 - arrSum
}
