/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  const target = wordList.indexOf(endWord)
  if (target === -1) return 0
  const n = wordList.length,
    L = beginWord.length,
    begin = wordList.indexOf(beginWord),
    queue = [begin],
    visited = new Set([begin])
  let steps = 1
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const idx = queue.shift(),
        word = idx === -1 ? beginWord : wordList[idx]
      if (idx === target) return steps
      for (let j = 0; j < n; j++) {
        if (visited.has(j) || idx === j) continue
        let diff = 0
        for (let k = 0; k < L; k++) {
          if (word[k] !== wordList[j][k]) diff++
          if (diff > 1) break
        }
        if (diff === 1) {
          visited.add(j)
          queue.push(j)
        }
      }
    }
    steps++
  }
  return 0
}
