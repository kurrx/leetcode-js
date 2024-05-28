/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
  const n = s.length,
    stack = []
  for (let i = 0; i < n; i++) {
    if (stack.length && s[stack.at(-1)[0]] === s[i]) {
      stack.at(-1)[1]++
      if (stack.at(-1)[1] === k) {
        stack.pop()
      }
    } else {
      stack.push([i, 1])
    }
  }
  let result = ''
  for (const [i, c] of stack) {
    result += s[i].repeat(c)
  }
  return result
}
