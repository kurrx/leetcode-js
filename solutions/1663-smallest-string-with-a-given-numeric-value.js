const A_CODE = 'a'.charCodeAt(0)
/**
 * https://leetcode.com/problems/smallest-string-with-a-given-numeric-value
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getSmallestString(n, k) {
  let result = ''
  while (result.length < n) {
    const rest = 26 * (n - result.length - 1)
    let char = 1
    if (k - 1 > rest) {
      char = k - rest
    }
    k -= char
    result += String.fromCharCode(A_CODE + char - 1)
  }
  return result
}
