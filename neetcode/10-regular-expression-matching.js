/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  function matches(i, j) {
    return p[j] === '.' || s[i] === p[j]
  }
  function dp(i, j) {
    // We reached end of s and p, we matched pattern
    if (i >= n && j >= m) return true

    // We reached end of s or p
    // we exhausted either pattern, either string
    // but not reached end of both
    if (j >= m) return false

    // Memo
    if (memo.has(i)) {
      if (memo.get(i).has(j)) return memo.get(i).get(j)
    } else {
      memo.set(i, new Map())
    }

    let answer
    if (p[j] === '*') {
      // Edge case, skip trailing *
      answer = dp(i, j + 1)
    } else {
      if (p[j + 1] === '*') {
        // a*, trying to match pattern from 0 to n
        answer = dp(i, j + 2)
        let next = i
        while (next < n && matches(next, j)) {
          next++
          answer ||= dp(next, j + 2)
        }
      } else {
        answer = matches(i, j) && dp(i + 1, j + 1)
      }
    }

    memo.get(i).set(j, answer)
    return answer
  }
  const n = s.length,
    m = p.length
  // Edge Case
  let asterisk = 0
  for (let i = 0; i < m; i++) if (p[i] === '*') asterisk++
  if (m - asterisk * 2 > n) return false
  const memo = new Map()
  return dp(0, 0)
}
