/**
 * https://leetcode.com/problems/word-pattern
 *
 * TC: O(n + m)
 * SC: O(k)
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const m = pattern.length
  if (s.length < m) return false
  const words = s.split(' ')
  if (words.length !== m) return false

  const lettersMap = new Map()
  const wordsMap = new Map()
  for (let i = 0; i < m; i++) {
    const letter = pattern.charAt(i)
    const word = words[i]
    const letterMapWord = lettersMap.get(letter) || word
    const wordMapLetter = wordsMap.get(word) || letter
    if (letterMapWord !== word || wordMapLetter !== letter) {
      return false
    }
    lettersMap.set(letter, letterMapWord)
    wordsMap.set(word, wordMapLetter)
  }
  return true
}
