/**
 * https://leetcode.com/problems/maximum-split-of-positive-even-integers
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number} finalSum
 * @return {number[]}
 */
function maximumEvenSplit(finalSum) {
  if (finalSum % 2 === 1) return []
  const answer = []
  let sum = 0,
    curr = 2
  while (sum < finalSum) {
    const needed = finalSum - sum
    if (needed - curr <= curr) {
      answer.push(needed)
      sum += needed
    } else {
      answer.push(curr)
      sum += curr
    }
    curr += 2
  }
  return answer
}
