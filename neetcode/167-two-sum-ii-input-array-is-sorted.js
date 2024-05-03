/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let left = 0,
    right = numbers.length,
    sum
  while (left < right) {
    sum = numbers[left] + numbers[right]
    if (sum === target) {
      // Return two indices + 1 bc we found our answer
      return [left + 1, right + 1]
    } else if (sum < target) {
      // We need greater sum than current
      left++
    } else {
      // We need smaller sum than current
      right--
    }
  }
  // Not found
  return [-1, -1]
}
