/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
  function explorePath(left, right) {
    while (left < right) {
      if (s[left++] !== s[right--]) {
        return false
      }
    }
    return true
  }
  let left = 0,
    right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      if (explorePath(left + 1, right)) return true
      if (explorePath(left, right - 1)) return true
      return false
    } else {
      left++
      right--
    }
  }
  return true
}
