const ZERO = '0'.charCodeAt(0)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1.length < num2.length) return multiply(num2, num1)

  const n = num1.length,
    m = num2.length,
    result = []
  let carry, num, product, idx
  for (let i = m - 1; i >= 0; i--) {
    num = num2.charCodeAt(i) - ZERO
    // If number equals to zero we skip
    if (!num) {
      result.push(0)
      continue
    }

    // Multiplication and summation to prev result
    carry = 0
    for (let j = n - 1; j >= 0; j--) {
      idx = n + m - j - i - 2
      product = num * (num1.charCodeAt(j) - ZERO) + carry
      if (idx < result.length) product += result[idx]

      carry = Math.floor(product / 10)
      if (idx < result.length) result[idx] = product % 10
      else result.push(product % 10)
    }
    if (carry) result.push(carry)
  }

  // Build answer
  return result.reverse().join('')
}
