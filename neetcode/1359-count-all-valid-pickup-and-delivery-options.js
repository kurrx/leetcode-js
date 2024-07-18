const MOD = 1_000_000_007
/**
 * @param {number} n
 * @return {number}
 */
function countOrders(n) {
  let answer = 1
  for (let i = 1; i <= n; ++i) {
    answer = answer * i
    answer = answer * (2 * i - 1)
    answer %= MOD
  }
  return answer
}
