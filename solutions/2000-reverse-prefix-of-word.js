/**
 * https://leetcode.com/problems/reverse-prefix-of-word
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
  const n = word.length
  const wordChars = word.split('')

  for (let right = 0; right < n; right++) {
    if (wordChars[right] === ch) {
      let left = 0
      while (left < right) {
        const temp = wordChars[left]
        wordChars[left++] = wordChars[right]
        wordChars[right--] = temp
      }
      break
    }
  }

  return wordChars.join('')
}
