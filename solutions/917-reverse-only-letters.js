/**
 * https://leetcode.com/problems/reverse-only-letters
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLetters(s) {
  let left = 0,
    right = s.length - 1
  const stringArr = s.split('')

  while (left < right) {
    const isLeftEnglishLetter = isEnglishLetterAtIndex(s, left),
      isRightEnglishLetter = isEnglishLetterAtIndex(s, right)

    if (isLeftEnglishLetter && isRightEnglishLetter) {
      const temp = stringArr[left]
      stringArr[left++] = stringArr[right]
      stringArr[right--] = temp
    } else {
      if (!isLeftEnglishLetter) {
        left++
      }
      if (!isRightEnglishLetter) {
        right--
      }
    }
  }

  return stringArr.join('')
}

/**
 *
 * @param {string} s
 * @param {number} index
 * @returns {boolean}
 */
function isEnglishLetterAtIndex(s, index) {
  return /^[A-Za-z]$/.test(s.charAt(index))
}
