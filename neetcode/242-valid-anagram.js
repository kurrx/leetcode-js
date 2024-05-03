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
  for (let i = 0; i < n; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1)
    map.set(t[i], (map.get(t[i]) ?? 0) - 1)
  }
  for (const count of map.values()) {
    if (count) {
      return false
    }
  }
  return true
}
