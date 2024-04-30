/**
 * Monotonic increasing Stack/Queue/Deque
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function monotonicIncreasing(arr) {
  let answer = 0
  const stack = []
  for (const num of arr) {
    // For monotonic decreasing, just flip the > to <
    while (stack.length && stack[stack.length - 1] > num) {
      // Do logic
      stack.pop()
    }
    stack.push(num)
  }
  return answer
}
