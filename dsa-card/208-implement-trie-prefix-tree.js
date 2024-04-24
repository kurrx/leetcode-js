// https://leetcode.com/problems/implement-trie-prefix-tree

class TrieNode {
  constructor() {
    this.end = false
    this.links = new Map()
  }

  /**
   * @param {number} code
   * @returns {TrieNode}
   */
  get(code) {
    return this.links.get(code)
  }

  /**
   * @param {number} code
   * @returns {TrieNode}
   */
  add(code) {
    const node = new TrieNode()
    this.links.set(code, node)
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

  /**
   * @returns {void}
   */
  setEnd() {
    this.end = true
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    const n = word.length
    let curr = this.root
    for (let i = 0; i < n; i++) {
      curr = curr.getOrAdd(word.charCodeAt(i))
    }
    curr.setEnd()
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const n = word.length
    let curr = this.root
    for (let i = 0; i < n && curr; i++) {
      curr = curr.get(word.charCodeAt(i))
    }
    return curr?.end ?? false
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const n = prefix.length
    let curr = this.root
    for (let i = 0; i < n && curr; i++) {
      curr = curr.get(prefix.charCodeAt(i))
    }
    return !!curr
  }
}
