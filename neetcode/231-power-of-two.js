/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if (n <= 0) return false
  return (n & -n) === n
}
