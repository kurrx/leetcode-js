/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function beautifulSubsets(nums, k) {
  function backtrack(i = 0, subset = new Map()) {
    if (i === nums.length) return 1
    let count = 0
    // skip
    if (subset.size || i !== nums.length - 1) {
      count += backtrack(i + 1, subset)
    }
    // take
    if (!subset.has(nums[i] - k)) {
      const freq = subset.get(nums[i]) ?? 0
      subset.set(nums[i], freq + 1)
      count += backtrack(i + 1, subset)
      if (!freq) subset.delete(nums[i])
      else subset.set(nums[i], freq - 1)
    }
    return count
  }
  nums.sort((a, b) => a - b)
  return backtrack()
}
