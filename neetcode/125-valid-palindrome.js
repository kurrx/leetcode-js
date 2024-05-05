/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  function isNotAlphaNum(index) {
    return /[^0-9a-z]/i.test(s[index])
  }
  let left = 0,
    right = s.length - 1
  while (left < right) {
    if (isNotAlphaNum(left)) {
      left++
      continue
    }
    if (isNotAlphaNum(right)) {
      right--
      continue
    }
    if (
      (mapper.get(s[left]) ?? s[left]) !== (mapper.get(s[right]) ?? s[right])
    ) {
      return false
    }
    left++
    right--
  }
  return true
}
const a = 'a'.charCodeAt(0)
const A = 'A'.charCodeAt(0)
const mapper = new Map([
  ...Array.from({ length: 26 }, (_, i) => [
    String.fromCharCode(A + i),
    String.fromCharCode(a + i),
  ]),
])
