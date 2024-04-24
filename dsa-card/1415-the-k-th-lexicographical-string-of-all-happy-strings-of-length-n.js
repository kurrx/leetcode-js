/**
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n
 *
 * TC: O(3^n)
 * SC: O(n)
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getHappyString(n, k) {
  function backtrack(curr) {
    if (found) return
    if (curr.length === n) {
      count++
      if (count === k) {
        kthHappyString = curr.join('')
        found = true
      }
      return
    }

    for (const letter of SET) {
      if (found) return
      if (letter !== curr.at(-1)) {
        curr.push(letter)
        backtrack(curr)
        curr.pop(letter)
      }
    }
  }
  let kthHappyString = '',
    count = 0,
    found = false
  backtrack([])
  return kthHappyString
}
const SET = 'abc'
