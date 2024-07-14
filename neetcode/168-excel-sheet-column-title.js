const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
/**
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
  let answer = ''
  while (columnNumber) {
    columnNumber--
    answer = ALPHABET[columnNumber % 26] + answer
    columnNumber = Math.floor(columnNumber / 26)
  }
  return answer
}
