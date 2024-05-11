const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
  function canVisit(row, col, node) {
    return (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      board[row][col] !== '#' &&
      node.has(board[row][col].charCodeAt(0))
    )
  }
  function findAll(row, col, node) {
    const char = board[row][col],
      currNode = node.get(board[row][col].charCodeAt(0))

    if (currNode.word !== null) {
      answer.push(words[currNode.word])
      currNode.word = null
    }

    board[row][col] = '#'
    let nextRow, nextCol, nextNode
    for (const [dy, dx] of DIRS) {
      nextRow = row + dy
      nextCol = col + dx
      if (canVisit(nextRow, nextCol, currNode)) {
        findAll(nextRow, nextCol, currNode)
      }
    }
    board[row][col] = char
    if (currNode.isEmpty()) node.delete(char.charCodeAt(0))
  }

  const rows = board.length,
    cols = board[0].length,
    root = new TrieNode(),
    answer = []

  // Build trie from words list
  let curr
  for (let i = 0; i < words.length; i++) {
    curr = root
    for (let j = 0; j < words[i].length; j++)
      curr = curr.getOrAdd(words[i].charCodeAt(j))
    curr.word = i
  }

  // Find words inside of board
  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++)
      if (root.has(board[row][col].charCodeAt(0))) findAll(row, col, root)
  return answer
}

class TrieNode {
  constructor() {
    this.next = new Map()
    this.word = null
  }

  isEmpty() {
    return this.next.size === 0
  }

  has(code) {
    return this.next.has(code)
  }

  get(code) {
    return this.next.get(code)
  }

  add(code) {
    const node = new TrieNode()
    this.next.set(code, node)
    return node
  }

  delete(code) {
    this.next.delete(code)
  }

  getOrAdd(code) {
    let node = this.get(code)
    if (!node) node = this.add(code)
    return node
  }
}
