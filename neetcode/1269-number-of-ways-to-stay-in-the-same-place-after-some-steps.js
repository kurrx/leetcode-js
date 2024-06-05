const MOD = 1_000_000_007
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
function numWays(steps, arrLen) {
  arrLen = Math.min(Math.floor(steps / 2) + 1, arrLen)
  const dp = [new Array(arrLen), new Array(arrLen)]
  dp[0][0] = 1
  let prevIdx = 0
  for (let stepsLeft = 1; stepsLeft <= steps; stepsLeft++) {
    for (let pos = 0; pos < arrLen; pos++) {
      dp[1 - prevIdx][pos] = dp[prevIdx][pos] ?? 0
      if (pos > 0) {
        dp[1 - prevIdx][pos] += dp[prevIdx][pos - 1] ?? 0
      }
      if (pos < arrLen - 1) {
        dp[1 - prevIdx][pos] += dp[prevIdx][pos + 1] ?? 0
      }
      dp[1 - prevIdx][pos] %= MOD
    }
    prevIdx = 1 - prevIdx
  }
  return dp[prevIdx][0]
}
