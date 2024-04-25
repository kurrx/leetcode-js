/**
 * https://leetcode.com/problems/hamming-distance
 *
 * TC: O(1)
 * SC: O(1)
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
  let xor = x ^ y
  let count = 0
  while (xor) {
    count++
    xor = xor & (xor - 1)
  }
  return count
}
