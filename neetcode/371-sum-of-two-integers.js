/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
  while (a & b) {
    ;[a, b] = [a ^ b, (a & b) << 1]
  }
  return a ^ b
}
