/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0,
    right = height.length - 1,
    max = 0
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}
