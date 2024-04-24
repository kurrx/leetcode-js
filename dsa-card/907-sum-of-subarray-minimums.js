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
  let sum = 0
  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || arr[stack.at(-1)] >= arr[i])) {
      const mid = stack.pop()
      sum += arr[mid] * (i - mid) * (mid - (stack.at(-1) ?? -1))
      sum %= 1_000_000_007
    }
    stack.push(i)
  }
  return sum
}
