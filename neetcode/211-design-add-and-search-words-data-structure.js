class TrieNode {
  constructor() {
    this.next = new Map()
    this.word = false
  }

  get size() {
    return this.next.size
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

class WordDictionary {
  constructor() {
    this.root = new TrieNode()
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++)
      curr = curr.getOrAdd(word.charCodeAt(i))
    curr.word = true
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    function has(node, start) {
      for (let i = start; i < n && node; i++) {
        if (word[i] === '.') {
          for (const nextNode of node.next.values())
            if (has(nextNode, i + 1)) return true
          return false
        } else {
          node = node.get(word.charCodeAt(i))
        }
      }
      return node?.word ?? false
    }
    const n = word.length
    return has(this.root, 0)
  }
}
