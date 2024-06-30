const DIGITS = (function () {
  const result = []
  let start = 0,
    inc = 0
  for (let digits = 1; digits <= 9; digits++) {
    inc = inc * 10 + 1
    let num = (start = start * 10 + digits)
    for (let i = 1; i <= 10 - digits; i++) {
      result.push(num)
      num += inc
    }
  }
  return result
})()

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function sequentialDigits(low, high) {
  let lowIndex = null
  for (let i = 0; i < DIGITS.length; i++) {
    if (DIGITS[i] >= low) {
      lowIndex = i
      break
    }
  }
  let highIndex = null
  for (let i = DIGITS.length - 1; i >= 0; i--) {
    if (DIGITS[i] <= high) {
      highIndex = i
      break
    }
  }
  if (lowIndex === null || highIndex === null) {
    return []
  }
  return DIGITS.slice(lowIndex, highIndex + 1)
}
