/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  const n = s.length
  const freqs = new Map()
  for (let i = 0; i < n; i++) {
    freqs.set(s[i], (freqs.get(s[i]) ?? 0) + 1)
  }
  const entries = Array.from(freqs.entries()).sort((a, b) => {
    if (b[1] === a[1]) {
      return b[0].charCodeAt(0) - a[0].charCodeAt(0)
    }
    return b[1] - a[1]
  })
  let result = ''
  for (const [char, freq] of entries) {
    result += char.repeat(freq)
  }
  return result
}
