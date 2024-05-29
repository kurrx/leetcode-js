/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  const n1 = str1.length,
    n2 = str2.length
  if (n2 > n1) return gcdOfStrings(str2, str1)

  let maxStr = ''
  for (let size = n2; size > 0; size--) {
    if (n1 % size !== 0 || n2 % size !== 0) continue
    const t = str2.slice(0, size)
    const result2 = t.repeat(n2 / size)
    if (str2 !== result2) continue
    const result1 = t.repeat(n1 / size)
    if (str1 !== result1) continue
    return t
  }
  return maxStr
}
