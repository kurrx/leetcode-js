/**
 * https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket
 *
 * TC: O(n*log(n))
 * SC: O(log(n))
 *
 * @param {number[]} weight
 * @return {number}
 */
function maxNumberOfApples(weight) {
  weight.sort((a, b) => a - b)
  let unitsLeft = 5000,
    total = 0
  for (const w of weight) {
    if (w > unitsLeft) break
    unitsLeft -= w
    total++
  }
  return total
}
