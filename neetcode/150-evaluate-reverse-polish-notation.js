const OPS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b),
}
/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = []
  let num1, num2
  for (const token of tokens) {
    if (OPS[token]) {
      num2 = stack.pop()
      num1 = stack.pop()
      stack.push(OPS[token](num1, num2))
    } else {
      stack.push(Number(token))
    }
  }
  return stack.pop()
}
