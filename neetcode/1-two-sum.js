/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map()
  let find
  for (let i = 0; i < nums.length; i++) {
    find = target - nums[i]
    if (map.has(find)) {
      return [map.get(find), i]
    }
    map.set(nums[i], i)
  }
  return [-1, -1]
}
