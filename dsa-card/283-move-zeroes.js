/**
 * https://leetcode.com/problems/move-zeroes
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
function moveZeroes(nums) {
  const n = nums.length
  let insertIndex = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue
    nums[insertIndex++] = nums[i]
  }
  for (let i = insertIndex; i < n; i++) {
    nums[i] = 0
  }
}
