/**
 * Kadane's Algorithm - Largest Contiguous Subarray Sum
 * Returns [sum, from, to]
 *
 * @param {number[]} arr
 * @returns {[number, number, number]}
 */
function maxSubarraySum(arr) {
  const n = arr.length
  let maxSoFar = Number.MIN_SAFE_INTEGER,
    maxEndingHere = 0,
    start = 0,
    end = 0,
    s = 0
  for (let i = 0; i < n; i++) {
    maxEndingHere += arr[i]
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
      start = s
      end = i
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0
      s = i + 1
    }
  }
  return [maxSoFar, start, end]
}
