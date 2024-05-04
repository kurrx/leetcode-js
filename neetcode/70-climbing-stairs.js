/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let twoBack = 0,
    oneBack = 1,
    temp
  for (let i = 0; i < n; i++) {
    temp = oneBack
    oneBack += twoBack
    twoBack = temp
  }
  return oneBack
}
