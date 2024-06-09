/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  if (s.length === 0) return 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let gp = 0,
    sp = 0
  while (gp < g.length && sp < s.length) {
    if (g[gp] <= s[sp]) {
      gp++
      sp++
    } else {
      sp++
    }
  }
  return gp
}
