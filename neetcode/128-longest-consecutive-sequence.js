/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const set = new Set(nums)
  let max = 0
  for (const num of set) {
    if (set.has(num - 1)) continue
    let sequence = 1,
      curr = num
    while (set.has(curr + 1)) {
      curr++
      sequence++
    }
    max = Math.max(max, sequence)
  }
  return max
}
