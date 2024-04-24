/**
 * https://leetcode.com/problems/n-th-tribonacci-number
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  if (n === 0) return 0
  if (n <= 2) return 1
  let threeBack = 0,
    twoBack = 1,
    oneBack = 1,
    temp
  for (let i = 3; i <= n; i++) {
    temp = oneBack
    oneBack = oneBack + twoBack + threeBack
    threeBack = twoBack
    twoBack = temp
  }
  return oneBack
}
