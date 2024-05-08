/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = coins.length - 1; i >= 0; i--) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount]
}
