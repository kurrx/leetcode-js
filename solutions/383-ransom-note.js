/**
 * https://leetcode.com/problems/ransom-note
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

function canConstruct(ransomNote, magazine) {
  const n = ransomNote.length
  const m = magazine.length
  if (n > m) return false

  const counter = new Map()
  for (let i = 0; i < m; i++) {
    const letter = magazine.charAt(i)
    counter.set(letter, (counter.get(letter) || 0) + 1)
  }

  for (let i = 0; i < n; i++) {
    const letter = ransomNote.charAt(i)
    const count = counter.get(letter) || 0
    if (count === 0) {
      return false
    }
    counter.set(letter, count - 1)
  }

  return true
}
