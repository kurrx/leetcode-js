/**
 * https://leetcode.com/problems/maximum-candies-allocated-to-k-children
 *
 * TC: O(n*log(s))
 * SC: O(1)
 *
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
function maximumCandies(candies, k) {
  let maxCandies = Number.MIN_SAFE_INTEGER,
    totalCandies = 0
  for (const candy of candies) {
    totalCandies += candy
    if (candy > maxCandies) {
      maxCandies = candy
    }
  }
  if (totalCandies < k) return 0

  let left = 1,
    right = maxCandies
  while (left <= right) {
    const count = Math.floor((left + right) / 2)

    let currTotal = 0
    for (const candy of candies) {
      currTotal += Math.floor(candy / count)
    }

    if (currTotal >= k) left = count + 1
    else right = count - 1
  }
  return right
}
