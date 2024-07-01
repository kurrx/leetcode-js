/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
function missingRolls(rolls, mean, n) {
  let remaining = (rolls.length + n) * mean - rolls.reduce((a, b) => a + b)
  let remainingMean = remaining / n
  // Impossible
  if (remainingMean < 1 || remainingMean > 6) return []
  remainingMean = Math.floor(remainingMean)
  remaining -= remainingMean * n
  // Fill with initial mean value floored
  const answer = new Array(n).fill(remainingMean)
  let i = 0
  while (remaining) {
    answer[i]++
    remaining--
    if (++i >= answer.length) i = 0
  }
  return answer
}
