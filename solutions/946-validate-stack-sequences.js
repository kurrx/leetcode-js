/**
 * https://leetcode.com/problems/validate-stack-sequences
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  const n = pushed.length,
    stack = []
  let popIdx = 0
  for (const num of pushed) {
    stack.push(num)
    while (
      stack.length &&
      popIdx < n &&
      stack[stack.length - 1] === popped[popIdx]
    ) {
      stack.pop()
      popIdx++
    }
  }
  return popIdx === n
}
