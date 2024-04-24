/**
 * https://leetcode.com/problems/stone-game-iii
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} stoneValue
 * @return {string}
 */
function stoneGameIII(stoneValue) {
  const n = stoneValue.length

  let val,
    temp,
    oneBack = 0,
    twoBack,
    threeBack
  for (let i = n - 1; i >= 0; i--) {
    temp = oneBack
    val = stoneValue[i]
    oneBack = stoneValue[i] - oneBack
    if (i + 2 <= n) {
      val += stoneValue[i + 1]
      oneBack = Math.max(oneBack, val - twoBack)
    }
    if (i + 3 <= n) {
      val += stoneValue[i + 2]
      oneBack = Math.max(oneBack, val - threeBack)
    }
    threeBack = twoBack
    twoBack = temp
  }

  if (oneBack > 0) {
    return 'Alice'
  } else if (oneBack < 0) {
    return 'Bob'
  }
  return 'Tie'
}
