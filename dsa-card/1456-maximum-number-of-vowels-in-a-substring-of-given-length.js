/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxVowels(s, k) {
  const n = s.length

  let vowelsCount = 0
  for (let i = 0; i < k; i++) {
    if (isLetterVowel(s.charAt(i))) {
      vowelsCount++
    }
  }

  let max = vowelsCount
  for (let right = k; right < n; right++) {
    if (isLetterVowel(s.charAt(right))) {
      vowelsCount++
    }
    if (isLetterVowel(s.charAt(right - k))) {
      vowelsCount--
    }
    if (vowelsCount > max) {
      max = vowelsCount
    }
  }

  return max
}

/**
 * @param {string} s
 * @returns {boolean}
 */
function isLetterVowel(s) {
  return /^[aeiou]$/i.test(s)
}
