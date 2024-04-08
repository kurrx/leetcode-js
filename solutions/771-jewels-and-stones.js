/**
 * https://leetcode.com/problems/jewels-and-stones
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  const n = stones.length
  const jewelsSet = new Set(jewels.split(''))

  let count = 0
  for (let i = 0; i < n; i++) {
    if (jewelsSet.has(stones.charAt(i))) {
      count++
    }
  }

  return count
}
