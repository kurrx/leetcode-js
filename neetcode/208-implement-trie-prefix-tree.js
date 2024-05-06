class TrieNode {
  constructor() {
    this.next = new Map() // neighbors
    this.word = false // Is any words ends at current node
  }

  /**
   * @param {number} code
   * @returns {TrieNode|undefined}
   */
  get(code) {
    return this.next.get(code)
  }

  /**
   * @param {number} code
   * @returns {TrieNode}
   */
  add(code) {
    const newNode = new TrieNode()
    this.next.set(code, newNode)
    return newNode
  }

  /**
   * @param {number} code
   * @returns {TrieNode}
   */
  getOrAdd(code) {
    let node = this.next.get(code)
    if (!node) {
      node = this.add(code)
    }
    return node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode() // ""
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
      curr = curr.getOrAdd(word.charCodeAt(i))
    }
    curr.word = true
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let curr = this.root
    for (let i = 0; i < word.length && curr; i++) {
      curr = curr.get(word.charCodeAt(i))
    }
    return curr?.word ?? false
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let curr = this.root
    for (let i = 0; i < prefix.length && curr; i++) {
      curr = curr.get(prefix.charCodeAt(i))
    }
    return !!curr
  }
}
