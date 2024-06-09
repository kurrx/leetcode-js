/**
 * @param {number} n
 * @return {number}
 */
function minimumOneBitOperations(n) {
  let answer = 0,
    k = 0,
    mask = 1
  while (mask <= n) {
    if ((n & mask) !== 0) {
      answer = (1 << (k + 1)) - 1 - answer
    }
    mask <<= 1
    k++
  }
  return answer
}
