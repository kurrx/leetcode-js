const map = new Map([
  [')', '('],
  [']', '['],
  ['}', '{'],
])
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const n = s.length
  // Terminate early if number of brackets is odd
  if (n % 2) return false
  const stack = []
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      if (!stack.length) return false
      if (map.get(s[i]) !== stack.at(-1)) return false
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  // If we didn't close all brackets
  return stack.length === 0
}
