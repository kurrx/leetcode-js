/**
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes(dominoes) {
  const n = dominoes.length
  const pairs = new Array(n + 2),
    answer = Array.from(dominoes)
  let len = 1
  pairs[0] = [-1, 'L']
  for (let i = 0; i < n; i++) {
    if (dominoes[i] !== '.') {
      pairs[len++] = [i, dominoes[i]]
    }
  }
  pairs[len++] = [n, 'R']
  for (let index = 0; index < len - 1; index++) {
    const [[i, x], [j, y]] = [pairs[index], pairs[index + 1]]
    const writeX = x === y,
      write = x > y
    for (let k = i + 1; k < j; k++) {
      if (writeX) {
        answer[k] = x
      } else if (write) {
        answer[k] = k - i === j - k ? '.' : k - i < j - k ? 'R' : 'L'
      }
    }
  }
  return answer.join('')
}
