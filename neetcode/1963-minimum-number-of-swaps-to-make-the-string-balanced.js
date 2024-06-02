/**
 * @param {string} s
 * @return {number}
 */
function minSwaps(s) {
  const n = s.length
  let balance = 0,
    max = -Infinity
  for (let i = 0; i < n; i++) {
    if (s[i] === '[') balance--
    else balance++
    max = Math.max(max, balance)
  }
  return Math.floor((max + 1) / 2)
}
