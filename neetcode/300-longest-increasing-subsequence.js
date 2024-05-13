/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  function binarySearch(arr, target) {
    let left = 0,
      right = arr.length - 1,
      mid
    while (left < right) {
      mid = Math.floor((left + right) / 2)
      if (target === arr[mid]) return mid
      else if (target < arr[mid]) right = mid
      else left = mid + 1
    }
    return left
  }

  const n = nums.length,
    sequence = []
  for (let i = 0; i < n; i++) {
    if (!sequence.length || sequence.at(-1) < nums[i]) {
      sequence.push(nums[i])
      continue
    }
    sequence[binarySearch(sequence, nums[i])] = nums[i]
  }
  return sequence.length
}
