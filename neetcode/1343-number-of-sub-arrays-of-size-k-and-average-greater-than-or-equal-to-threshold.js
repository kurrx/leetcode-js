/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function numOfSubarrays(arr, k, threshold) {
  // First window
  let prefix = 0
  for (let i = 0; i < k; i++) prefix += arr[i]

  // Sliding window
  let answer = 0
  for (let i = k; i <= arr.length; i++) {
    if (prefix / k >= threshold) {
      answer++
    }
    if (i < arr.length) {
      prefix -= arr[i - k]
      prefix += arr[i]
    }
  }
  return answer
}
