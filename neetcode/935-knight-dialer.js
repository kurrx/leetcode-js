const MOD = 1_000_000_007
const MOVES = [
  [4, 6],
  [6, 8],
  [7, 9],
  [4, 8],
  [0, 3, 9],
  [],
  [0, 1, 7],
  [2, 6],
  [1, 3],
  [2, 4],
]
/**
 * @param {number} n
 * @return {number}
 */
function knightDialer(n) {
  const dp = [new Array(10).fill(1), new Array(10).fill(0)]
  let prevIdx = 0
  for (let left = 1; left < n; left++) {
    for (let digit = 0; digit <= 9; digit++) {
      let answer = 0
      for (const next of MOVES[digit]) {
        answer = (answer + dp[prevIdx][next]) % MOD
      }
      dp[1 - prevIdx][digit] = answer
    }
    prevIdx = 1 - prevIdx
  }
  let total = 0
  for (let i = 0; i <= 9; i++) {
    total = (total + dp[prevIdx][i]) % MOD
  }
  return total
}
