/**
 * https://leetcode.com/problems/coin-change-ii
 *
 * TC: O(a*n)
 * SC: O(a)
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
  const n = coins.length
  const dp = new Array(amount + 1)
  dp[0] = 1
  for (let i = n - 1; i >= 0; i--) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = (dp[j] ?? 0) + (dp[j - coins[i]] ?? 0)
    }
  }
  return dp[amount]
}
