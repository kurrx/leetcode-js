/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  function expand(start, end, max, range) {
    while (start > 0 && end < n - 1 && s[start - 1] === s[end + 1]) {
      start--
      end++
    }
    const size = end - start + 1
    if (size > max) {
      range[0] = start
      range[1] = end
      return size
    }
    return max
  }

  const n = s.length
  let max = 1,
    range = [0, 0]
  for (let i = 0; i < n; i++) {
    max = expand(i, i, max, range)
    if (i > 0 && s[i - 1] === s[i]) max = expand(i - 1, i, max, range)
  }
  return s.slice(range[0], range[1] + 1)
}
