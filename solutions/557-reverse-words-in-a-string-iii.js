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
  const n = s.length
  const chArray = s.split('')
  let lastSpaceIndex = -1

  for (let strIndex = 0; strIndex <= n; strIndex++) {
    if (strIndex !== n && chArray[strIndex] !== ' ') continue

    let left = lastSpaceIndex + 1,
      right = strIndex - 1
    while (left < right) {
      const temp = chArray[left]
      chArray[left++] = chArray[right]
      chArray[right--] = temp
    }
    lastSpaceIndex = strIndex
  }

  return chArray.join('')
}
