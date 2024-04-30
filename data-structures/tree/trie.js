class TrieNode {
  constructor() {
    this.next = new Map()
    this.end = false
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
    const node = new TrieNode()
    this.next.set(code, node)
    return node
  }

  /**
   * @param {number} code
   * @returns {TrieNode}
   */
  getOrAdd(code) {
    let node = this.get(code)
    if (!node) {
      node = this.add(code)
    }
    return node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  /**
   * Inserts word into trie
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   * Where n is the length of the word
   *
   * @param {string} word
   */
  insert(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
      curr = curr.getOrAdd(word.charCodeAt(i))
    }
    curr.end = true
  }

  /**
   * Searches for exact word
   *
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   * Where n is the length of the word
   *
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    let curr = this.root
    for (let i = 0; i < word.length && curr; i++) {
      curr = curr.get(word.charCodeAt(i))
    }
    return curr?.end ?? false
  }

  /**
   * Searches for prefix
   *
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   * Where n is the length of the word
   *
   * @param {string} prefix
   * @returns {boolean}
   */
  startsWith(prefix) {
    let curr = this.root
    for (let i = 0; i < prefix.length && curr; i++) {
      curr = curr.get(prefix.charCodeAt(i))
    }
    return !!curr
  }
}
