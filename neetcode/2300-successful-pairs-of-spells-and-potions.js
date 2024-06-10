/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function successfulPairs(spells, potions, success) {
  function numberOfPairs(i) {
    const target = Math.ceil(success / spells[i])
    let left = 0,
      right = m
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (potions[mid] >= target) right = mid
      else left = mid + 1
    }
    return m - left
  }

  const n = spells.length,
    m = potions.length
  potions.sort((a, b) => a - b)

  const answer = new Array(n)
  for (let i = 0; i < n; i++) {
    answer[i] = numberOfPairs(i)
  }
  return answer
}
