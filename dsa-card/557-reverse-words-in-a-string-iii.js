/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const words = s.split(' ').map(v => v.split(''))
  let left, right, temp
  for (let i = 0; i < words.length; i++) {
    left = 0
    right = words[i].length - 1
    while (left < right) {
      temp = words[i][left]
      words[i][left++] = words[i][right]
      words[i][right--] = temp
    }
    words[i] = words[i].join('')
  }
  return words.join(' ')
}
