/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const n = word1.length,
    m = word2.length
  let prevDP = new Array(m + 1)
  for (let j = 0; j <= m; j++) prevDP[j] = m - j
  for (let i = n - 1; i >= 0; i--) {
    const nextDP = new Array(m + 1)
    nextDP[m] = n - i
    for (let j = m - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        nextDP[j] = prevDP[j + 1]
      } else {
        nextDP[j] = 1 + Math.min(nextDP[j + 1], prevDP[j], prevDP[j + 1])
      }
    }
    prevDP = nextDP
  }
  return prevDP[0]
}
