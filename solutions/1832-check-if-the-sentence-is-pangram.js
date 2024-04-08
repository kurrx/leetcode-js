/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
  const n = sentence.length

  const seenLetters = new Set()
  for (let i = 0; i < n; i++) {
    const char = sentence.charAt(i)
    if (!seenLetters.has(char)) {
      seenLetters.add(char)
    }
  }

  return seenLetters.size === 26
}
