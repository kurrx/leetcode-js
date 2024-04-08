const WORD = new Map([
  ['b', 1],
  ['a', 1],
  ['l', 2],
  ['o', 2],
  ['n', 1],
])
/**
 * https://leetcode.com/problems/maximum-number-of-balloons
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
  const n = text.length
  const counter = new Map()
  for (let i = 0; i < n; i++) {
    const char = text.charAt(i)
    if (WORD.has(char)) {
      counter.set(char, (counter.get(char) || 0) + 1)
    }
  }

  let minDivider = Infinity
  for (const [letter, neededCount] of WORD) {
    const count = counter.get(letter) || 0
    const canBeConstructed = Math.floor(count / neededCount)
    if (canBeConstructed < minDivider) {
      minDivider = canBeConstructed
    }
  }

  return minDivider === Infinity ? 0 : minDivider
}
