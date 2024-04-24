/**
 * https://leetcode.com/problems/sum-of-subarray-ranges
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
function subArrayRanges(arr) {
  const n = arr.length,
    min = [],
    max = []
  let sum = 0
  for (let i = 0; i <= n; i++) {
    while (min.length && (i === n || arr[min.at(-1)] >= arr[i])) {
      const mid = min.pop()
      sum -= arr[mid] * (i - mid) * (mid - (min.at(-1) ?? -1))
    }
    min.push(i)
    while (max.length && (i === n || arr[max.at(-1)] <= arr[i])) {
      const mid = max.pop()
      sum += arr[mid] * (i - mid) * (mid - (max.at(-1) ?? -1))
    }
    max.push(i)
  }
  return sum
}
