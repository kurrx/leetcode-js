/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const dict = new Map(),
    usedWords = new Set()
  s = s.split(' ')
  if (pattern.length !== s.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (dict.has(pattern[i])) {
      if (dict.get(pattern[i]) !== s[i]) {
        return false
      }
    } else {
      if (usedWords.has(s[i])) {
        return false
      }
      usedWords.add(s[i])
      dict.set(pattern[i], s[i])
    }
  }
  return true
}
