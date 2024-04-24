/**
 * https://leetcode.com/problems/count-elements-with-maximum-frequency
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} numbers
 * @return {number}
 */
function maxFrequencyElements(numbers) {
  let maxFrequency = 0,
    totalFrequency = 0
  const frequencyCounter = new Map()
  for (const num of numbers) {
    const frequency = (frequencyCounter.get(num) || 0) + 1
    frequencyCounter.set(num, frequency)
    if (frequency > maxFrequency) {
      maxFrequency = frequency
      totalFrequency = frequency
    } else if (frequency === maxFrequency) {
      totalFrequency += frequency
    }
  }
  return totalFrequency
}
