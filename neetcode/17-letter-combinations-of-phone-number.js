const PHONE = new Map([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
])
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  function backtrack(i, curr) {
    if (i >= n) {
      if (curr.length) answer.push(curr.join(''))
      return
    }
    const letters = PHONE.get(digits[i])
    for (const letter of letters) {
      curr.push(letter)
      backtrack(i + 1, curr)
      curr.pop()
    }
  }
  const n = digits.length,
    answer = []
  backtrack(0, [])
  return answer
}
