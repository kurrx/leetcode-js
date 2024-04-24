/**
 * https://leetcode.com/problems/coin-change
 *
 * TC: O(S*n)
 * SC: O(S)
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  if (!amount) return 0

  function dp(total) {
    if (memo.has(total)) {
      return memo.get(total)
    }
    let min = Number.MAX_SAFE_INTEGER,
      canChange = false
    for (const coin of coins) {
      if (total - coin <= 0) continue
      const result = dp(total - coin)
      if (result !== -1 && result < min) {
        min = result
        canChange = true
      }
    }
    const answer = canChange ? min + 1 : -1
    memo.set(total, answer)
    return answer
  }

  const memo = new Map()
  for (const coin of coins) {
    memo.set(coin, 1)
  }
  return dp(amount)
}
