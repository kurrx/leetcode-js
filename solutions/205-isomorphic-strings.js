/**
 * https://leetcode.com/problems/isomorphic-strings
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  const n = s.length
  const sMap = new Map()
  const tMap = new Map()
  for (let i = 0; i < n; i++) {
    const sChar = s.charAt(i)
    const tChar = t.charAt(i)

    const sMapChar = sMap.get(sChar) || tChar
    sMap.set(sChar, sMapChar)
    const tMapChar = tMap.get(tChar) || sChar
    tMap.set(tChar, tMapChar)
    if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar) {
      return false
    }
  }
  return true
}
