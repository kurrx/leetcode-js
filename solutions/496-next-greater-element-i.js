/**
 * https://leetcode.com/problems/next-greater-element-i
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number[]}
 */
function nextGreaterElement(numbers1, numbers2) {
  const m = numbers1.length,
    n = numbers2.length
  const answer = new Array(m)
  const stack = []
  const map = new Map()

  for (let i = 0; i < n; i++) {
    const number = numbers2[i]
    while (stack.length && stack[stack.length - 1] < number) {
      map.set(stack.pop(), number)
    }
    stack.push(number)
  }

  for (let i = 0; i < m; i++) {
    answer[i] = map.get(numbers1[i]) ?? -1
  }

  return answer
}
