/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const n = s.length
  let left = 0,
    result = ''
  for (let right = 0; right <= n; right++) {
    if (right !== n && s[right] !== ' ') continue
    for (let i = right - 1; i >= left; i--) {
      result += s[i]
    }
    if (right !== n) {
      result += ' '
      left = right + 1
    }
  }
  return result
}
