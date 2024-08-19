class TrieNode {
  constructor() {
    this.child = new Map()
    this.word = false
  }

  has(letter) {
    return this.child.has(letter)
  }

  get(letter) {
    return this.child.get(letter) ?? null
  }

  add(letter) {
    const node = new TrieNode()
    this.child.set(letter, node)
    return node
  }

  getOrAdd(letter) {
    return this.get(letter) ?? this.add(letter)
  }
}

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
function minExtraChar(s, dictionary) {
  const n = s.length,
    trie = buildTrie(dictionary),
    dp = new Array(n + 1).fill(0)
  for (let start = n - 1; start >= 0; start--) {
    dp[start] = dp[start + 1] + 1
    let node = trie
    for (let end = start; end < n; end++) {
      if (!node.has(s[end])) break
      node = node.get(s[end])
      if (node.word) {
        dp[start] = Math.min(dp[start], dp[end + 1])
      }
    }
  }
  return dp[0]
}

/**
 * @param {string[]} dictionary
 */
function buildTrie(dictionary) {
  const root = new TrieNode()
  for (const word of dictionary) {
    let node = root
    for (const letter of word) {
      node = node.getOrAdd(letter)
    }
    node.word = true
  }
  return root
}
