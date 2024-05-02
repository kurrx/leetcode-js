/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @returns {number}
 */
function fibTopDownDP(n) {
  function dp(n) {
    if (n <= 0) return 0
    if (n === 1) return 1
    if (memo.has(n)) return memo.get(n)
    return dp(n - 1) + dp(n - 2)
  }
  const memo = new Map()
  return dp(n)
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @returns {number}
 */
function fibBottomUpDP(n) {
  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function fibBottomUpOptimizedDP(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  let twoBack = 0,
    oneBack = 1,
    temp
  for (let i = 2; i <= n; i++) {
    temp = oneBack
    oneBack = oneBack + twoBack
    twoBack = temp
  }
  return oneBack
}
