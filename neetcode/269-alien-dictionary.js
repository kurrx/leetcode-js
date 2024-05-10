/**
 * @param {string[]} words
 * @return {string}
 */
function alienOrder(words) {
  const n = words.length,
    graph = new Map(),
    inDegree = new Map(),
    queue = []

  // Pre-procces
  for (const word of words) {
    for (const char of word) {
      graph.set(char, [])
      inDegree.set(char, 0)
    }
  }

  // Build graph
  let word1, word2, maxN
  for (let i = 1; i < n; i++) {
    // Check adj words up to min length of both
    word1 = words[i - 1]
    word2 = words[i]
    // If prefix comes after
    if (word1.length > word2.length && word1.startsWith(word2)) return ''
    maxN = Math.min(word1.length, word2.length)
    for (let j = 0; j < maxN; j++) {
      if (word1[j] !== words[i][j]) {
        graph.get(word1[j]).push(word2[j])
        inDegree.set(word2[j], inDegree.get(word2[j]) + 1)
        break
      }
    }
  }

  // Start BFS from indegree 0
  for (const [char, count] of inDegree) if (!count) queue.push(char)

  // BFS
  let output = ''
  while (queue.length) {
    const char = queue.shift()
    output += char
    for (const next of graph.get(char)) {
      inDegree.set(next, inDegree.get(next) - 1)
      if (!inDegree.get(next)) {
        queue.push(next)
      }
    }
  }

  // If we can't build order
  if (output.length < inDegree.size) return ''
  return output
}
