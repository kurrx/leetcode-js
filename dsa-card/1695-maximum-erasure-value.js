/**
 * https://leetcode.com/problems/maximum-erasure-value
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function maximumUniqueSubarray(numbers) {
  const n = numbers.length
  const seenNumbers = new Set()
  let left = 0,
    maxSum = 0,
    currentSum = 0
  for (let right = 0; right < n; right++) {
    const rightNum = numbers[right]
    currentSum += rightNum
    while (seenNumbers.has(rightNum)) {
      const leftNum = numbers[left++]
      currentSum -= leftNum
      seenNumbers.delete(leftNum)
    }
    seenNumbers.add(rightNum)
    if (currentSum > maxSum) {
      maxSum = currentSum
    }
  }
  return maxSum
}
