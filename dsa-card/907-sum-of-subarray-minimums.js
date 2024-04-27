/**
 * https://leetcode.com/problems/sum-of-subarray-minimums
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
function sumSubarrayMins(arr) {
  const n = arr.length,
    stack = []
  let sum = 0,
    popped,
    min
  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || arr[stack.at(-1)] > arr[i])) {
      popped = stack.pop()
      min = arr[popped] * (i - popped) * (popped - (stack.at(-1) ?? -1))
      sum = (sum + min) % 1_000_000_007
    }
    if (i < n) stack.push(i)
  }
  return sum
}
