const ROMAN = new Map([
  [1000, new Map([[1, 'M']])],
  [
    100,
    new Map([
      [1, 'C'],
      [5, 'D'],
    ]),
  ],
  [
    10,
    new Map([
      [1, 'X'],
      [5, 'L'],
    ]),
  ],
  [
    1,
    new Map([
      [1, 'I'],
      [5, 'V'],
    ]),
  ],
])
/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  const strNum = String(num)
  let factor = Math.pow(10, strNum.length - 1)
  let result = ''
  for (let i = 0; i < strNum.length; i++) {
    const digit = +strNum[i]
    if (digit <= 3) {
      result += ROMAN.get(factor).get(1).repeat(digit)
    } else if (digit <= 8) {
      if (digit === 4) result += ROMAN.get(factor).get(1)
      result += ROMAN.get(factor).get(5)
      if (digit > 5)
        result += ROMAN.get(factor)
          .get(1)
          .repeat(digit - 5)
    } else {
      result += ROMAN.get(factor).get(1)
      result += ROMAN.get(factor * 10).get(1)
    }
    factor /= 10
  }
  return result
}
