/**
 * https://leetcode.com/problems/minimum-size-subarray-sum
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number} target
 * @param {number[]} numbers
 * @return {number}
 */
function minSubArrayLen(target, numbers) {
  const n = numbers.length
  let left = 0,
    min = Infinity,
    currentSum = 0

  for (let right = 0; right < n; right++) {
    currentSum += numbers[right]

    while (currentSum >= target) {
      min = Math.min(min, right - left + 1)
      currentSum -= numbers[left++]
    }
  }

  return min === Infinity ? 0 : min
}
