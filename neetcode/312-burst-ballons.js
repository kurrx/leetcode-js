/**
 * @param {number[]} nums
 * @return {number}
 */
function maxCoins(nums) {
  function dp(left, right) {
    if (left > right) return 0
    if (memo.has(left)) {
      if (memo.get(left).has(right)) return memo.get(left).get(right)
    } else {
      memo.set(left, new Map())
    }
    let max = 0
    for (let i = left; i <= right; i++) {
      max = Math.max(
        max,
        dp(left, i - 1) +
          nums[left - 1] * nums[i] * nums[right + 1] +
          dp(i + 1, right),
      )
    }
    memo.get(left).set(right, max)
    return max
  }
  const memo = new Map()
  nums.unshift(1)
  nums.push(1)
  return dp(1, nums.length - 2)
}
