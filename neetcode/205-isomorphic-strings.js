/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  const n = s.length
  const mapper = new Map(),
    seenT = new Set()
  for (let i = 0; i < n; i++) {
    if (mapper.has(s[i])) {
      if (mapper.get(s[i]) !== t[i]) {
        return false
      }
    } else {
      if (seenT.has(t[i])) {
        return false
      }
      mapper.set(s[i], t[i])
      seenT.add(t[i])
    }
  }
  return true
}
