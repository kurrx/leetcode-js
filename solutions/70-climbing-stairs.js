/**
 * https://leetcode.com/problems/climbing-stairs
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 1) return 1
  let twoBack = 1,
    oneBack = 1,
    answer
  for (let i = 2; i <= n; i++) {
    answer = oneBack + twoBack
    twoBack = oneBack
    oneBack = answer
  }
  return answer
}
