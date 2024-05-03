/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let i = digits.length - 1
  while (i >= 0 && digits[i] === 9) {
    digits[i--] = 0
  }
  if (i < 0) {
    digits.unshift(1)
  } else {
    digits[i] += 1
  }
  return digits
}
