/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
function divideArray(nums, k) {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i += 3) {
    result.push(nums.slice(i, i + 3))
    if (result.at(-1)[2] - result.at(-1)[0] > k) {
      return []
    }
  }
  return result
}
