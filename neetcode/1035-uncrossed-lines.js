/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxUncrossedLines(nums1, nums2) {
  const n1 = nums1.length,
    n2 = nums2.length
  if (n2 > n1) return maxUncrossedLines(nums2, nums1)
  const dp = [new Array(n2 + 1).fill(0), new Array(n2 + 1)]
  dp[1][n2] = 0
  let nextIdx = 1
  for (let p1 = n1 - 1; p1 >= 0; p1--) {
    for (let p2 = n2 - 1; p2 >= 0; p2--) {
      if (nums1[p1] === nums2[p2]) {
        dp[nextIdx][p2] = 1 + dp[1 - nextIdx][p2 + 1]
      } else {
        dp[nextIdx][p2] = Math.max(dp[1 - nextIdx][p2], dp[nextIdx][p2 + 1])
      }
    }
    nextIdx = 1 - nextIdx
  }
  return dp[1 - nextIdx][0]
}
