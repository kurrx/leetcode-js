/**
 * @param {string} s
 * @return {boolean}
 */
function splitString(s) {
  function backtrack(i, curr) {
    if (i >= n) {
      if (curr.length < 2) return false
      for (let j = 1; j < curr.length; j++) {
        if (curr[j] !== curr[j - 1] - 1) {
          return false
        }
      }
      return true
    }
    let number = 0
    for (let j = i; j < n; j++) {
      number = number * 10 + Number(s[j])
      if (curr.length && number >= curr.at(-1)) break
      if (!curr.length || number === curr.at(-1) - 1) {
        curr.push(number)
        if (backtrack(j + 1, curr)) {
          return true
        }
        curr.pop()
      }
    }
    return false
  }
  const n = s.length
  return backtrack(0, [])
}
