const MIN = 2 ** 31,
  MAX = 2 ** 31 - 1
/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const sign = x < 0 ? -1 : 1
  x = Math.abs(x)
  let answer = 0
  while (x) {
    answer = answer * 10 + (x % 10)
    x = Math.floor(x / 10)
    if (sign === -1 ? answer > MIN : answer > MAX) return 0
  }
  return answer * sign
}
