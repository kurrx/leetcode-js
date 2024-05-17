/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (n == 0) return 1
  if (n < 0) {
    n *= -1
    x = 1 / x
  }

  let answer = 1
  while (n) {
    if (n % 2) {
      answer *= x
      n--
    }
    x *= x
    n /= 2
  }
  return answer
}
