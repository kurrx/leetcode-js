/**
 * https://leetcode.com/problems/find-the-most-competitive-subsequence
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
function mostCompetitive(nums, k) {
  const n = nums.length
  if (n === k) return nums
  const stack = []
  let canDrop = n - k
  for (let i = 0; i < n; i++) {
    while (stack.length && canDrop && stack.at(-1) > nums[i]) {
      stack.pop()
      canDrop--
    }
    stack.push(nums[i])
  }
  while (stack.length > k) {
    stack.pop()
  }
  return stack
}
