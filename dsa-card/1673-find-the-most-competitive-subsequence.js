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
function mostCompetitive(numbers, k) {
  const n = numbers.length
  let canDrop = n - k
  const stack = []
  for (let i = 0; i < n; i++) {
    const num = numbers[i]
    while (stack.length && canDrop && stack[stack.length - 1] > num) {
      stack.pop()
      canDrop--
    }
    stack.push(num)
  }
  while (stack.length > k) {
    stack.pop()
  }
  return stack
}
