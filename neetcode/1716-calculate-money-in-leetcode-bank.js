/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
  const weeks = Math.floor(n / 7)
  const F = 28,
    L = 28 + (weeks - 1) * 7
  const arithmeticSum = (weeks * (F + L)) / 2

  const monday = 1 + weeks
  let finalWeek = 0
  for (let day = 0; day < n % 7; day++) {
    finalWeek += monday + day
  }

  return arithmeticSum + finalWeek
}
