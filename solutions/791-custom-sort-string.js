const A_CODE = 'a'.charCodeAt(0)
/**
 * https://leetcode.com/problems/custom-sort-string
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
function customSortString(order, s) {
  const n = s.length
  const freqMap = new Array(26).fill(0)
  for (let i = 0; i < n; i++) {
    freqMap[s.charCodeAt(i) - A_CODE]++
  }

  const m = order.length
  const sortedStr = []
  for (let i = 0; i < m; i++) {
    const char = order.charAt(i)
    const code = order.charCodeAt(i)
    sortedStr.push(char.repeat(freqMap[code - A_CODE]))
    freqMap[code - A_CODE] = 0
  }

  for (let i = 0; i < 26; i++) {
    if (freqMap[i] > 0) {
      sortedStr.push(String.fromCharCode(i + A_CODE).repeat(freqMap[i]))
    }
  }

  return sortedStr.join('')
}
