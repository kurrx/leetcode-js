/**
 * https://leetcode.com/problems/number-of-valid-subarrays
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function validSubarrays(numbers) {
  const n = numbers.length
  const stack = []
  let sum = 0
  for (let i = 0; i < n; i++) {
    const num = numbers[i]
    while (stack.length && stack[stack.length - 1] > num) {
      stack.pop()
    }
    stack.push(num)
    sum += stack.length
  }
  return sum
}
