/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
  const rem = n % 7
  const weeks = Math.floor(n / 7)
  return (
    weeks * 28 +
    7 * (((weeks - 1) * weeks) / 2) +
    ((rem * (rem + 1)) / 2 + weeks * rem)
  )
}
