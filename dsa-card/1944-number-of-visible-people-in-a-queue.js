/**
 * https://leetcode.com/problems/number-of-visible-people-in-a-queue
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} heights
 * @return {number[]}
 */
function canSeePersonsCount(heights) {
  const n = heights.length,
    answer = new Array(n),
    stack = []
  let removed
  for (let i = n - 1; i >= 0; i--) {
    removed = 0
    while (stack.length && stack.at(-1) < heights[i]) {
      stack.pop()
      removed++
    }
    if (stack.length) removed++
    answer[i] = removed
    stack.push(heights[i])
  }
  return answer
}
