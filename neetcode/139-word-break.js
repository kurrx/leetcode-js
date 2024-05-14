/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  function insertWord(word) {
    let curr = root
    for (let i = 0; i < word.length; i++)
      curr = curr.getOrAdd(word.charCodeAt(i))
    curr.word = true
    return curr
  }

  // Build Trie
  const root = new TrieNode(),
    dp = new Array(s.length)
  for (let i = 0; i < wordDict.length; i++) insertWord(wordDict[i])

  // DP
  let curr
  for (let i = 0; i < s.length; i++) {
    if (i !== 0 && !dp[i - 1]) continue
    curr = root
    for (let j = i; j < s.length; j++) {
      curr = curr.get(s.charCodeAt(j))
      if (!curr) break
      if (curr.word) dp[j] = true
    }
  }

  return !!dp[s.length - 1]
}

class TrieNode {
  constructor() {
    this.next = new Map()
    this.word = null
  }

  get(code) {
    return this.next.get(code)
  }

  add(code) {
    const node = new TrieNode()
    this.next.set(code, node)
    return node
  }

  getOrAdd(code) {
    let node = this.get(code)
    if (!node) node = this.add(code)
    return node
  }
}
