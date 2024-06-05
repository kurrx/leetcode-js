/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function rangeBitwiseAnd(left, right) {
  while (left < right) {
    right = right & (right - 1)
  }
  return right
}
