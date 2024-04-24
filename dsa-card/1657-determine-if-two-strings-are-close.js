const A_CODE = 'a'.charCodeAt(0)
/**
 * https://leetcode.com/problems/determine-if-two-strings-are-close
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
  const n = word1.length
  if (n !== word2.length) {
    return false
  }

  const freqMap1 = new Array(26).fill(0)
  const alphabet1 = new Array(26).fill(false)
  const freqMap2 = new Array(26).fill(0)
  const alphabet2 = new Array(26).fill(false)
  for (let i = 0; i < n; i++) {
    const index1 = word1.charCodeAt(i) - A_CODE
    freqMap1[index1]++
    alphabet1[index1] = true
    const index2 = word2.charCodeAt(i) - A_CODE
    freqMap2[index2]++
    alphabet2[index2] = true
  }

  freqMap1.sort((a, b) => a - b)
  freqMap2.sort((a, b) => a - b)

  for (let i = 0; i < 26; i++) {
    if (freqMap1[i] !== freqMap2[i] || alphabet1[i] !== alphabet2[i]) {
      return false
    }
  }

  return true
}
