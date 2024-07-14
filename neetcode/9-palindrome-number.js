/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false
  let reverse = 0,
    copy = x
  while (copy) {
    reverse = reverse * 10 + (copy % 10)
    copy = Math.floor(copy / 10)
  }
  return reverse === x
}
