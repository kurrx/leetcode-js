/**
 * https://leetcode.com/problems/number-of-dice-rolls-with-target-sum
 *
 * TC: O(n*k*target)
 * SC: O(target)
 *
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
function numRollsToTarget(n, k, target) {
  let prev
  for (let left = 0; left <= n; left++) {
    const next = new Array(target + 1)
    for (let needed = 0; needed <= target; needed++) {
      next[needed] = 0
      if (!prev || !needed) continue
      for (let face = 1; face <= k; face++) {
        if (face > needed) break
        next[needed] += prev[needed - face]
        next[needed] %= 1_000_000_007
      }
    }
    if (!prev) next[0] = 1
    prev = next
  }
  return prev[target]
}
