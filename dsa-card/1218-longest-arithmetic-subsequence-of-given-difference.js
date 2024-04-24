/**
 * https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, difference) {
  const n = arr.length,
    dp = new Map()
  let max = 0,
    answer
  for (let i = 0; i < n; i++) {
    answer = (dp.get(arr[i] - difference) ?? 0) + 1
    dp.set(arr[i], answer)
    max = Math.max(max, answer)
  }
  return max
}
