/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
function maxValueOfCoins(piles, k) {
  const n = piles.length
  const dp = [new Array(k + 1).fill(0), new Array(k + 1).fill(0)]
  let prevRow = 0
  for (let i = 1; i <= n; i++) {
    for (let coins = 0; coins <= k; coins++) {
      const upto = Math.min(piles[i - 1].length, coins)
      let sum = 0
      for (let curr = 0; curr <= upto; curr++) {
        if (curr > 0) {
          sum += piles[i - 1][curr - 1]
        }
        dp[1 - prevRow][coins] = Math.max(
          dp[1 - prevRow][coins],
          dp[prevRow][coins - curr] + sum,
        )
      }
    }
    prevRow = 1 - prevRow
  }
  return dp[prevRow][k]
}
