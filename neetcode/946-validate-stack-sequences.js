/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  const stack = []
  let i = 0,
    j = 0
  while (i < pushed.length || j < popped.length) {
    if (!stack.length || stack.at(-1) !== popped[j]) {
      if (i < pushed.length) {
        stack.push(pushed[i++])
      } else {
        return false
      }
    } else {
      stack.pop()
      j++
    }
  }
  return true
}
