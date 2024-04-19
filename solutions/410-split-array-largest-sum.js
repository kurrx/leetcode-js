/**
 * https://leetcode.com/problems/split-array-largest-sum
 *
 * TC: O(n*log(s))
 * SC: O(1)
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
function splitArray(numbers, k) {
  let left = Number.MIN_SAFE_INTEGER,
    right = 0
  for (const number of numbers) {
    if (number > left) left = number
    right += number
  }

  let minLargest = 0
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    let currSum = 0,
      subArrays = 0
    for (const number of numbers) {
      if (currSum + number <= mid) {
        currSum += number
      } else {
        currSum = number
        subArrays++
      }
    }
    subArrays++

    if (subArrays <= k) {
      right = mid - 1
      minLargest = mid
    } else {
      left = mid + 1
    }
  }
  return minLargest
}
