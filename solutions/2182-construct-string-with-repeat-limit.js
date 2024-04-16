/**
 * https://leetcode.com/problems/construct-string-with-repeat-limit
 *
 * TC: O(n*log(n))
 * SC: O(n)
 *
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
function repeatLimitedString(s, repeatLimit) {
  const freq = new Map()
  for (const char of s) {
    freq.set(char, (freq.get(char) ?? 0) + 1)
  }

  const heap = new Heap([], (a, b) => {
    return b[0].charCodeAt(0) - a[0].charCodeAt(0)
  })
  for (const entry of freq.entries()) {
    heap.push(entry)
  }
  freq.clear()

  let result = '',
    lastUsed = null
  while (!heap.isEmpty()) {
    let [char, freq] = heap.pop(),
      allowed = Math.min(freq, repeatLimit)
    if (char === lastUsed) {
      if (heap.isEmpty()) break
      const [newChar, newFreq] = heap.pop()
      heap.push([char, freq])
      char = newChar
      freq = newFreq
      allowed = 1
    }
    if (freq !== allowed) {
      heap.push([char, freq - allowed])
    }
    lastUsed = char
    result += char.repeat(allowed)
  }
  return result
}
