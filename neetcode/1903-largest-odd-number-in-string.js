const ZERO = '0'.charCodeAt(0)
/**
 * @param {string} num
 * @return {string}
 */
function largestOddNumber(num) {
  const n = num.length
  for (let i = n - 1; i >= 0; i--) {
    if ((num.charCodeAt(i) - ZERO) % 2 === 1) {
      return num.slice(0, i + 1)
    }
  }
  return ''
}
