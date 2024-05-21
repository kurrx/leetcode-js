/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const n = s.length
  let length = 0,
    reset = false
  for (let i = 0; i < n; i++) {
    if (s[i] !== ' ') {
      if (reset) {
        reset = false
        length = 0
      }
      length++
    } else {
      reset = true
    }
  }
  return length
}
