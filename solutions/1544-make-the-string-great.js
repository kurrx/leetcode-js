/**
 * https://leetcode.com/problems/make-the-string-great
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  const stack = []
  for (const letter of s) {
    if (stack.length && isSameLetter(letter, stack[stack.length - 1])) {
      stack.pop()
    } else {
      stack.push(letter)
    }
  }
  return stack.join('')
}

const DIFF = Math.abs('a'.charCodeAt(0) - 'A'.charCodeAt(0))
/**
 * @param {string} a
 * @param {string} b
 */
function isSameLetter(a, b) {
  return DIFF === Math.abs(a.charCodeAt(0) - b.charCodeAt(0))
}
