/**
 * @param {string} s
 * @return {number}
 */
function minOperations(s) {
  let start0 = 0,
    start1 = 0
  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      if (s[i] !== '1') start0++
      if (s[i] !== '0') start1++
    } else {
      if (s[i] !== '0') start0++
      if (s[i] !== '1') start1++
    }
  }
  return Math.min(start1, start0)
}
