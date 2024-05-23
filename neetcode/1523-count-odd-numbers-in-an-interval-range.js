/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOdds(low, high) {
  if (low === high) return low % 2 === 0 ? 0 : 1
  if (!(low % 2)) low++
  if (!(high % 2)) high--
  return 1 + (high - low) / 2
}
