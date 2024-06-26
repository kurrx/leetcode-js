/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  const remove = new Set()
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      if (!stack.length) {
        remove.add(i)
      } else {
        stack.pop()
      }
    }
  }
  while (stack.length) remove.add(stack.pop())
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (!remove.has(i)) {
      result += s[i]
    }
  }
  return result
}
