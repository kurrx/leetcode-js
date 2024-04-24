/**
 * https://leetcode.com/problems/sort-characters-by-frequency
 *
 * TC: O(n)
 * SC: O(k)
 *
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  const n = s.length
  const counter = new Map()
  for (let i = 0; i < n; i++) {
    const char = s.charAt(i)
    counter.set(char, (counter.get(char) || 0) + 1)
  }

  const characters = []
  for (const [char, count] of counter) {
    characters.push(char.repeat(count))
  }

  return characters.sort((a, b) => b.length - a.length).join('')
}
