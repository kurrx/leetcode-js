const add = new Set([1, 9, 99])
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getLengthOfOptimalCompression(s, k) {
  function dp(i, last, lastCount, k) {
    if (k < 0) return Infinity
    if (i >= s.length) return 0
    const key = `${i}-${last}-${lastCount}-${k}`
    if (memo.has(key)) return memo.get(key)
    let answer = dp(i + 1, last, lastCount, k - 1)
    if (s[i] === last) {
      answer = Math.min(
        answer,
        dp(i + 1, last, lastCount + 1, k) + (add.has(lastCount) ? 1 : 0),
      )
    } else {
      answer = Math.min(answer, dp(i + 1, s[i], 1, k) + 1)
    }
    memo.set(key, answer)
    return answer
  }
  const memo = new Map()
  return dp(0, null, 0, k)
}
