/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
  let prefixMod = 0
  const modSeen = new Map([[0, -1]])
  for (let i = 0; i < nums.length; i++) {
    prefixMod = (prefixMod + nums[i]) % k
    if (modSeen.has(prefixMod)) {
      if (i - modSeen.get(prefixMod) > 1) {
        return true
      }
    } else {
      modSeen.set(prefixMod, i)
    }
  }
  return false
}
