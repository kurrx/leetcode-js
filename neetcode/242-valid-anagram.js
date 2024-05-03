/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const n = s.length,
    m = t.length
  if (n !== m) return false
  const map = new Map()
  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1)
  }
  let count
  for (const char of t) {
    count = (map.get(char) ?? 0) - 1
    if (!count) map.delete(char)
    else map.set(char, count)
  }
  return map.size === 0
}
