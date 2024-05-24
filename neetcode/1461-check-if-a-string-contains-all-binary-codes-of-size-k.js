const byte = { 0: 0, 1: 1 }
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function hasAllCodes(s, k) {
  const n = s.length,
    max = Math.pow(2, k) - 1,
    seen = new Set()

  // Build first window
  let current = 0
  for (let i = 0; i < k; i++) current = current * 2 + byte[s[i]]

  // Move window
  for (let right = k; right < n; right++) {
    if (current > max) return false
    seen.add(current)
    current = (current * 2 + byte[s[right]]) ^ (byte[s[right - k]] << k)
  }
  seen.add(current)
  return seen.size === max + 1
}
