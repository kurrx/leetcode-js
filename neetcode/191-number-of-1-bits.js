/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
  let answer = 0
  while (n) {
    answer += n & 1
    n >>= 1
  }
  return answer
}
