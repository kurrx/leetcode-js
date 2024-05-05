/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const answer = new Array(n + 1)
  answer[0] = 0
  for (let i = 1; i <= n; i++) {
    answer[i] = answer[i >> 1] + (i & 1)
  }
  return answer
}
