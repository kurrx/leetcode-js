const A_CODE = 'a'.charCodeAt(0)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestIdealString(s, k) {
  const dp = new Array(26).fill(0)
  let max = 0
  for (let i = 0; i < s.length; i++) {
    const curr = s.charCodeAt(i) - A_CODE
    let best = 0
    for (
      let prev = Math.max(0, curr - k);
      prev < Math.min(26, curr + k + 1);
      prev++
    ) {
      best = Math.max(best, dp[prev])
    }
    max = Math.max(max, (dp[curr] = best + 1))
  }
  return max
}
