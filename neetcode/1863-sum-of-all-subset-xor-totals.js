/**
 * @param {number[]} nums
 * @return {number}
 */
function subsetXORSum(nums) {
  function generateSubsets(i = 0, subset = [], subsets = []) {
    if (i === nums.length) {
      subsets.push([...subset])
      return subsets
    }
    subset.push(nums[i])
    generateSubsets(i + 1, subset, subsets)
    subset.pop()
    return generateSubsets(i + 1, subset, subsets)
  }
  const subsets = generateSubsets()
  let result = 0
  for (const subset of subsets) {
    let xor = 0
    for (const num of subset) {
      xor ^= num
    }
    result += xor
  }
  return result
}
