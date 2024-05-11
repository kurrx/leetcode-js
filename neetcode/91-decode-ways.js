const ZERO = '0'.charCodeAt(0)
/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  const n = s.length
  let twoBack = 1,
    oneBack = s[n - 1] !== '0' ? 1 : 0,
    temp
  for (let i = n - 2; i >= 0; i--) {
    temp = oneBack
    oneBack = 0
    if (s[i] !== '0') {
      oneBack += temp
      if ((s.charCodeAt(i) - ZERO) * 10 + (s.charCodeAt(i + 1) - ZERO) <= 26) {
        oneBack += twoBack
      }
    }
    twoBack = temp
  }
  return oneBack
}
