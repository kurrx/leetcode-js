/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  const charsCount = new Map()
  for (let i = 0; i < chars.length; i++) {
    charsCount.set(chars[i], (charsCount.get(chars[i]) ?? 0) + 1)
  }

  let answer = 0
  for (const word of words) {
    const wordCount = new Map()
    let good = true
    for (let i = 0; i < word.length; i++) {
      const count = (wordCount.get(word[i]) ?? 0) + 1
      if (count > (charsCount.get(word[i]) ?? 0)) {
        good = false
        break
      }
      wordCount.set(word[i], count)
    }
    if (good) answer += word.length
  }
  return answer
}
