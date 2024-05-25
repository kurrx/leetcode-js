const WORD = new Map([
  ['b', 1],
  ['a', 1],
  ['l', 2],
  ['o', 2],
  ['n', 1],
])
/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
  const n = text.length,
    counter = new Map()
  for (let i = 0; i < n; i++) {
    if (WORD.has(text[i])) {
      counter.set(text[i], (counter.get(text[i]) ?? 0) + 1)
    }
  }
  if (counter.size !== WORD.size) return 0
  let count = Infinity
  for (const [letter, freq] of counter) {
    count = Math.min(count, Math.floor(freq / WORD.get(letter)))
  }
  return count === Infinity ? 0 : count
}
