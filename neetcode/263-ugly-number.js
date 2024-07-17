/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n) {
  if (n <= 0) return false
  for (const factor of [2, 3, 5]) {
    n = ((dividend, divisor) => {
      while (dividend % divisor === 0) {
        dividend /= divisor
      }
      return dividend
    })(n, factor)
  }
  return n === 1
}
