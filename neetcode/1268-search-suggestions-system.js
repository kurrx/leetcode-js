class TrieNode {
  constructor() {
    this.children = []
    this.word = null
  }

  get(code) {
    return this.children[TrieNode.normalizeCode(code)]
  }

  add(code) {
    return (this.children[TrieNode.normalizeCode(code)] = new TrieNode())
  }

  getOrAdd(code) {
    return this.get(code) ?? this.add(code)
  }

  nextDFS(code, limit = 3) {
    const root = this.get(code)
    if (!root) return [root, []]
    const result = [],
      stack = [root]
    while (stack.length) {
      const node = stack.pop()
      if (node.word) {
        result.push(node.word)
        if (result.length === limit) {
          break
        }
      }
      for (let i = 25; i >= 0; i--) {
        if (node.children[i]) {
          stack.push(node.children[i])
        }
      }
    }
    return [root, result]
  }
}

TrieNode.A_CODE = 'a'.charCodeAt(0)
TrieNode.normalizeCode = function (code) {
  return code - TrieNode.A_CODE
}

class Trie {
  constructor(dict) {
    this.root = new TrieNode()
    for (const word of dict) {
      this.insert(word)
    }
  }

  insert(word) {
    let curr = this.root
    for (let i = 0; i < word.length; i++) {
      curr = curr.getOrAdd(word.charCodeAt(i))
    }
    curr.word = word
  }

  getSuggestions(searchWord) {
    const result = new Array(searchWord.length)
    let cursor = this.root
    for (let i = 0; i < searchWord.length; i++) {
      if (!cursor) {
        result[i] = []
      } else {
        ;[cursor, result[i]] = cursor.nextDFS(searchWord.charCodeAt(i))
      }
    }
    return result
  }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
function suggestedProducts(products, searchWord) {
  return new Trie(products).getSuggestions(searchWord)
}
