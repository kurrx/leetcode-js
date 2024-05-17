/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const n = height.length,
    stack = []
  let answer = 0,
    top
  for (let i = 0; i < n; i++) {
    while (stack.length && height[i] > height[stack.at(-1)]) {
      top = stack.pop()
      if (!stack.length) break
      answer +=
        (i - stack.at(-1) - 1) *
        (Math.min(height[i], height[stack.at(-1)]) - height[top])
    }
    stack.push(i)
  }
  return answer
}
