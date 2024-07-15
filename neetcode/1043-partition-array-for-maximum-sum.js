/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function maxSumAfterPartitioning(arr, k) {
  const dp = new Array(arr.length + 1)
  dp[arr.length] = 0
  for (let start = arr.length - 1; start >= 0; start--) {
    dp[start] = 0
    let currMax = 0,
      end = Math.min(arr.length, start + k)
    for (let i = start; i < end; i++) {
      currMax = Math.max(currMax, arr[i])
      dp[start] = Math.max(dp[start], currMax * (i - start + 1) + dp[i + 1])
    }
  }
  return dp[0]
}
