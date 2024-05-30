/**
 * @param {number[]} stoneValue
 * @return {string}
 */
function stoneGameIII(stoneValue) {
  const n = stoneValue.length
  const dp = new Array(n + 1)
  dp[n] = 0
  let oneBack = 0,
    twoBack = 0,
    threeBack = 0,
    temp
  for (let i = n - 1; i >= 0; i--) {
    temp = oneBack
    oneBack = stoneValue[i] - oneBack
    if (i + 2 <= n) {
      oneBack = Math.max(oneBack, stoneValue[i] + stoneValue[i + 1] - twoBack)
    }
    if (i + 3 <= n) {
      oneBack = Math.max(
        oneBack,
        stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - threeBack,
      )
    }
    threeBack = twoBack
    twoBack = temp
  }
  if (oneBack < 0) {
    return 'Bob'
  } else if (oneBack > 0) {
    return 'Alice'
  }
  return 'Tie'
}
