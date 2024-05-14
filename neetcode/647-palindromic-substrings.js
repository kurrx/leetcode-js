/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  function countExpand(l, r) {
    let count = 1
    while (l > 0 && r < n - 1 && s[--l] === s[++r]) count++
    return count
  }

  const n = s.length
  let count = 0
  for (let i = 0; i < n; i++) {
    count += countExpand(i, i)
    if (i > 0 && s[i - 1] === s[i]) count += countExpand(i - 1, i)
  }
  return count
}
