/**
 * https://leetcode.com/problems/word-ladder
 *
 * TC: O(n * k^2)
 * SC: O(k^2)
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  const wordLength = beginWord.length,
    dictLength = wordList.length,
    queue = [[beginWord, -1]],
    seen = new Set([beginWord])

  let steps = 1
  while (queue.length) {
    const length = queue.length
    for (let q = 0; q < length; q++) {
      const [curr, idx] = queue.shift()
      for (let i = 0; i < dictLength; i++) {
        if (i === idx) continue
        const next = wordList[i]
        let diff = 0
        for (let j = 0; j < wordLength; j++) {
          if (curr[j] !== next[j]) diff++
          if (diff > 1) break
        }
        if (diff !== 1) continue
        if (next === endWord) return steps + 1
        if (seen.has(next)) continue
        seen.add(next)
        queue.push([next, i])
      }
    }
    steps++
  }

  return 0
}
