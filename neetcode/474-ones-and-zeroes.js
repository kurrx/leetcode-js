/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
  const size = strs.length
  const dp = [new Array(m + 1), new Array(m + 1)]
  for (let i = 0; i <= m; i++) {
    dp[0][i] = new Array(n + 1).fill(0)
    dp[1][i] = new Array(n + 1).fill(0)
  }
  let prevIdx = 0,
    zeroes,
    ones
  for (let i = size - 1; i >= 0; i--) {
    ones = 0
    zeroes = 0
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === '0') zeroes++
      else ones++
    }
    for (let z = 0; z <= m; z++) {
      for (let o = 0; o <= n; o++) {
        dp[1 - prevIdx][z][o] = dp[prevIdx][z][o]
        if (z + zeroes <= m && o + ones <= n) {
          dp[1 - prevIdx][z][o] = Math.max(
            dp[1 - prevIdx][z][o],
            1 + dp[prevIdx][z + zeroes][o + ones],
          )
        }
      }
    }
    prevIdx = 1 - prevIdx
  }
  return dp[prevIdx][0][0]
}
