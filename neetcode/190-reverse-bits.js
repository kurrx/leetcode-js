/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let result = 0,
    count = 32
  while (count--) {
    result *= 2
    result += n & 1
    n = n >> 1
  }
  return result
}
