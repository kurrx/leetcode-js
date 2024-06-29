/**
 * @param {number[]} piles
 * @return {number}
 */
function stoneGameII(piles) {
  function find(p, i, m) {
    if (i === piles.length) return 0
    const key = `${p}-${i}-${m}`
    if (memo.has(key)) return memo.get(key)
    let res = p === 1 ? 1000000 : -1,
      s = 0
    for (let x = 1; x <= Math.min(2 * m, piles.length - i); x++) {
      s += piles[i + x - 1]
      if (p === 0) {
        res = Math.max(res, s + find(1, i + x, Math.max(m, x)))
      } else {
        res = Math.min(res, find(0, i + x, Math.max(m, x)))
      }
    }
    memo.set(key, res)
    return res
  }
  const memo = new Map()
  return find(0, 0, 1)
}
