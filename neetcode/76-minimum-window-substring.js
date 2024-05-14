/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const n = s.length,
    m = t.length,
    map = new Map()
  let min = Infinity,
    zero = 0,
    size,
    saved,
    count
  for (let i = 0; i < m; i++) map.set(t[i], (map.get(t[i]) ?? 0) + 1)
  for (let left = 0, right = 0; left < n; left++) {
    while (right < n && zero !== map.size) {
      if (map.has(s[right])) {
        count = map.get(s[right]) - 1
        if (count === 0) zero++
        map.set(s[right], count)
      }
      right++
    }
    size = right - left
    if (zero === map.size && size < min) {
      saved = left
      min = size
    }
    if (map.has(s[left])) {
      count = map.get(s[left]) + 1
      if (count === 1) zero--
      map.set(s[left], count)
    }
  }
  return min === Infinity ? '' : s.slice(saved, saved + min)
}
