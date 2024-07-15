const lower = new Set(Array.from('abcdefghijklmnopqrstuvwxyz'))
const upper = new Set(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
/**
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (
      (lower.has(stack.at(-1)) &&
        upper.has(s[i]) &&
        stack.at(-1).toUpperCase() === s[i]) ||
      (upper.has(stack.at(-1)) &&
        lower.has(s[i]) &&
        stack.at(-1).toLowerCase() === s[i])
    ) {
      stack.pop()
      continue
    }
    stack.push(s[i])
  }
  return stack.join('')
}
