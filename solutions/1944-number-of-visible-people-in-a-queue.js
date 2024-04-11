/**
 * https://leetcode.com/problems/number-of-visible-people-in-a-queue
 *
 * TC: O(1)
 * SC: O(n)
 *
 * @param {number[]} heights
 * @return {number[]}
 */
function canSeePersonsCount(heights) {
  const n = heights.length,
    stack = [],
    answer = new Array(n)
  answer[n - 1] = 0
  for (let i = n - 1; i >= 1; i--) {
    while (stack.length && heights[stack.at(-1)] < heights[i]) {
      stack.pop()
    }
    stack.push(i)
    answer[i - 1] = stack.length
    for (let j = stack.length - 1; j >= 0; j--) {
      if (heights[stack[j]] >= heights[i - 1]) {
        answer[i - 1] = stack.length - j
        break
      }
    }
  }
  return answer
}
