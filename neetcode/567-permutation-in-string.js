/**
 * @param {string} s2
 * @param {string} s1
 * @return {boolean}
 */
function checkInclusion(s2, s1) {
  // Terminate early because s2 can't be
  // permutation of s1 if it has less size
  if (s1.length < s2.length) return false

  // Count char freq of s2
  // and also Build sliding window which size is m
  const n = s1.length,
    m = s2.length,
    map = new Map()
  let code1, code2, count
  for (let i = 0; i < m; i++) {
    code1 = s2.charCodeAt(i)
    code2 = s1.charCodeAt(i)
    if (code1 === code2) continue

    count = (map.get(code1) ?? 0) + 1
    if (!count) map.delete(code1)
    else map.set(code1, count)

    count = (map.get(code2) ?? 0) - 1
    if (!count) map.delete(code2)
    else map.set(code2, count)
  }

  // Sliding window with fixed size
  for (let i = m; i <= n; i++) {
    if (!map.size) return true
    if (i === n) break
    code1 = s1.charCodeAt(i - m)
    code2 = s1.charCodeAt(i)
    if (code1 === code2) continue

    count = (map.get(code1) ?? 0) + 1
    if (!count) map.delete(code1)
    else map.set(code1, count)

    count = (map.get(code2) ?? 0) - 1
    if (!count) map.delete(code2)
    else map.set(code2, count)
  }

  // So far we didn't met any permutation
  return false
}
