/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
  const n = num.length
  if (k === 0) return num
  if (n === k || n === 0) return '0'
  const stack = []
  for (let i = 0; i <= n; i++) {
    while (stack.length && k && (i === n || stack.at(-1) > num[i])) {
      stack.pop()
      k--
    }
    if (i < n && (stack.length || num[i] !== '0')) {
      stack.push(num[i])
    }
  }
  return stack.join('') || '0'
}
