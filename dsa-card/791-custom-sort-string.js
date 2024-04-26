/**
 * https://leetcode.com/problems/custom-sort-string
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
function customSortString(order, s) {
  const counter = new Map()
  for (const char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1)
  }
  let result = ''
  for (const char of order) {
    if (!counter.has(char)) continue
    result += char.repeat(counter.get(char))
    counter.delete(char)
  }
  for (const [char, count] of counter) {
    result += char.repeat(count)
  }
  return result
}
