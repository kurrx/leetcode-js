/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  nums.sort((a, b) => a - b)
  return kSum(nums, target, 0, 4)
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @param {number} k
 * @return {number[][]}
 */
function kSum(nums, target, start, k) {
  const result = []
  if (start >= nums.length) {
    return result
  }
  const average = Math.floor(target / k)
  if (nums[start] > average || average > nums.at(-1)) {
    return result
  }
  if (k === 2) {
    return twoSum(nums, target, start)
  }
  for (let i = start; i < nums.length; i++) {
    if (i === start || nums[i - 1] !== nums[i]) {
      for (const set of kSum(nums, target - nums[i], i + 1, k - 1)) {
        result.push([nums[i], ...set])
      }
    }
  }
  return result
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number[][]}
 */
function twoSum(nums, target, start) {
  const result = []
  let left = start,
    right = nums.length - 1
  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum < target || (left > start && nums[left] === nums[left - 1])) {
      left++
    } else if (
      sum > target ||
      (right < nums.length - 1 && nums[right] === nums[right + 1])
    ) {
      right--
    } else {
      result.push([nums[left++], nums[right--]])
    }
  }
  return result
}
