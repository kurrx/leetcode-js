/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  let bitmask = 0
  for (const num of nums) bitmask ^= num
  let diff = bitmask & -bitmask,
    x = 0
  for (const num of nums) if ((num & diff) !== 0) x ^= num
  return [x, bitmask ^ x]
}
