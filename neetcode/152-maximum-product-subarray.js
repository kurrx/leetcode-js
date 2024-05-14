/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  const n = nums.length
  if (!n) return 0

  let maxSoFar, minSoFar, max, temp, curr, product1, product2
  maxSoFar = minSoFar = max = nums[0]
  for (let i = 1; i < n; i++) {
    curr = nums[i]
    product1 = maxSoFar * curr
    product2 = minSoFar * curr
    temp = Math.max(curr, product1, product2)
    minSoFar = Math.min(curr, product1, product2)
    maxSoFar = temp
    max = Math.max(max, maxSoFar)
  }
  return max
}
