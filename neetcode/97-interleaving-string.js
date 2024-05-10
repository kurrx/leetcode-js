/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave(s1, s2, s3) {
  const n1 = s1.length,
    n2 = s2.length,
    n3 = s3.length
  if (n1 + n2 !== n3) return false
  if (n1 < n2) return isInterleave(s2, s1, s3)
  const dp = [new Array(n2 + 1).fill(false), new Array(n2 + 1)]
  dp[0][n2] = true
  let k,
    nextIdx = 1
  for (let i = n1; i >= 0; i--) {
    for (let j = n2; j >= 0; j--) {
      k = i + j
      dp[nextIdx][j] = false
      if (i === n1 && j === n2) {
        dp[nextIdx][j] = true
      } else if (
        (i === n1 && j < n2 && s2[j] !== s3[k]) ||
        (j === n2 && i < n1 && s1[i] !== s3[k])
      ) {
        dp[nextIdx][j] = false
      } else {
        if (s1[i] === s3[k]) dp[nextIdx][j] ||= dp[1 - nextIdx][j]
        if (s2[j] === s3[k]) dp[nextIdx][j] ||= dp[nextIdx][j + 1]
      }
    }
    nextIdx = 1 - nextIdx
  }
  return dp[1 - nextIdx][0]
}
