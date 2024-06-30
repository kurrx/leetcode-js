/**
 * @param {number[]} nums
 * @return {number}
 */
function maxScore(nums) {
  function gcd(a, b) {
    if (b === 0) return a
    return gcd(b, a % b)
  }
  function backtrack(op, mask) {
    if (op > operations) return 0
    if (memo.has(mask)) return memo.get(mask)
    let answer = 0
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (((mask >> i) & 1) === 1 || ((mask >> j) & 1) === 1) {
          continue
        }
        answer = Math.max(
          answer,
          op * gcd(nums[i], nums[j]) +
            backtrack(op + 1, mask | (1 << i) | (1 << j)),
        )
      }
    }
    memo.set(mask, answer)
    return answer
  }
  const n = nums.length,
    operations = n / 2,
    memo = new Map()
  return backtrack(1, 0)
}
