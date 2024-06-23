/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  pairs.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })
  let curr = -Infinity,
    answer = 0
  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0] > curr) {
      answer++
      curr = pairs[i][1]
    }
  }
  return answer
}
