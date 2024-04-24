/**
 * https://leetcode.com/problems/maximum-69-number
 *
 * TC: O(D)
 * SC: O(1)
 *
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  let lastSeenIndexOfSix = -1,
    curr = num,
    i = 0
  while (curr > 1) {
    const digit = curr % 10
    if (digit === 6) {
      lastSeenIndexOfSix = i
    }
    curr = Math.floor(curr / 10)
    i++
  }
  if (lastSeenIndexOfSix === -1) return num
  return num + 3 * 10 ** lastSeenIndexOfSix
}
