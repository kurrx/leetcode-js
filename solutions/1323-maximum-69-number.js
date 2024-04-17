/**
 * https://leetcode.com/problems/maximum-69-number
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  const digits = String(num),
    n = digits.length
  let changed = false,
    result = 0
  for (let i = 0; i < n; i++) {
    let digit = Number(digits[i])
    if (digit === 6 && !changed) {
      digit = 9
      changed = true
    }
    result = result * 10 + digit
  }
  return result
}
