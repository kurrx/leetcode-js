/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  const n = s.length
  let open = 0,
    close = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '(' || s[i] === '*') open++
    else open--
    if (s[n - i - 1] === ')' || s[n - i - 1] === '*') close++
    else close--
    if (open < 0 || close < 0) return false
  }
  return true
}
