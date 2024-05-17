/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const n = height.length
  let leftMax = 0,
    left = 0,
    rightMax = 0,
    right = n - 1,
    answer = 0
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        answer += leftMax - height[left]
      }
      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        answer += rightMax - height[right]
      }
      right--
    }
  }
  return answer
}
