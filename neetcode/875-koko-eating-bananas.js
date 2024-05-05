/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  function canFinish(k) {
    let total = 0
    for (let i = 0; i < n; i++) {
      total += Math.ceil(piles[i] / k)
    }
    return total <= h
  }
  const n = piles.length
  let max = 0
  for (let i = 0; i < n; i++) if (piles[i] > max) max = piles[i]
  let left = 0,
    right = max
  while (left <= right) {
    const k = Math.floor((left + right) / 2)
    if (canFinish(k)) right = k - 1
    else left = k + 1
  }
  return left
}
