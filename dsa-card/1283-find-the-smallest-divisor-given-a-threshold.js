/**
 * https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold
 *
 * TC: O(n*log(k))
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @param {number} threshold
 * @return {number}
 */
function smallestDivisor(numbers, threshold) {
  let max = Number.MIN_SAFE_INTEGER
  for (const number of numbers) if (number > max) max = number

  let left = 1,
    right = max
  while (left <= right) {
    const divisor = Math.floor((left + right) / 2)

    let sum = 0
    for (const number of numbers) {
      sum += Math.ceil(number / divisor)
      if (sum > threshold) break
    }

    if (sum <= threshold) right = divisor - 1
    else left = divisor + 1
  }
  return left
}
