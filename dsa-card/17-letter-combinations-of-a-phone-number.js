/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number
 *
 * TC: O(n*4^n)
 * SC: O(n)
 *
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  function backtracking(curr, i) {
    if (i >= digits.length) {
      if (curr.length > 0) {
        answers.push(curr.join(''))
      }
      return
    }

    for (const letter of phone.get(digits[i])) {
      curr.push(letter)
      backtracking(curr, i + 1)
      curr.pop()
    }
  }
  const answers = []
  backtracking([], 0)
  return answers
}
const phone = new Map([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
])
