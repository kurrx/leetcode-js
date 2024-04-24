/**
 * https://leetcode.com/problems/container-with-most-water
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  const n = height.length
  let maxArea = 0
  let left = 0,
    right = n - 1
  while (left < right) {
    maxArea = Math.max(
      maxArea,
      (right - left) * Math.min(height[left], height[right]),
    )
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}
