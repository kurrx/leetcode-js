/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const n = heights.length
  if (n === 0) return 0
  if (n === 1) return heights[0]
  const stack = []
  let max = 0,
    removed,
    popped
  for (let i = 0; i <= n; i++) {
    removed = 0
    while (stack.length && (i === n || heights[stack.at(-1)[0]] > heights[i])) {
      popped = stack.pop()
      max = Math.max(max, heights[popped[0]] * (popped[1] + i - popped[0]))
      removed += popped[1] + 1
    }
    stack.push([i, removed])
  }
  return max
}
