/**
 * Added small modification (count) to allow value dupes
 */
class TreeNode {
  /**
   * @param {number} [value]
   * @param {TreeNode} [left]
   * @param {TreeNode} [right]
   */
  constructor(value = 0, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
    this.count = 1
  }

  /**
   * Increments count of current node value, returns new count
   *
   * @returns {number}
   */
  increment() {
    this.count++
    return this.count
  }

  /**
   * Decrements count of current node value, returns new count
   *
   * @returns {number}
   */
  decrement() {
    this.count--
    return this.count
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
    this.size = 0
  }

  /**
   * Returns count of `value`, if doesn't exists returns 0
   *
   * Time Complexity: O(log n)
   * Space Complexity: O(log n)
   *
   * @param {number} value
   * @returns {number}
   */
  get(value) {
    return this._get(this.root, value)
  }

  /**
   * @private
   * @param {TreeNode} node
   * @param {number} value
   * @returns {number}
   */
  _get(node, value) {
    if (!node) return 0
    let answer
    if (value === node.value) {
      answer = node.count
    } else if (value < node.value) {
      answer = this._get(node.left, value)
    } else {
      answer = this._get(node.right, value)
    }
    return answer
  }

  /**
   * Adds value to the tree, returns new size of tree
   *
   * Time Complexity: O(log n)
   * Space Complexity: O(log n)
   *
   * @param {number} value
   * @returns {number}
   */
  add(value) {
    this.root = this._add(this.root, value)
    this.size++
    return this.size
  }

  /**
   * @private
   * @param {TreeNode} node
   * @param {number} value
   * @returns {number}
   */
  _add(node, value) {
    if (!node) return new TreeNode(value)
    if (value === node.value) {
      node.increment()
    } else if (value < node.value) {
      node.left = this._add(node.left, value)
    } else {
      node.right = this._add(node.right, value)
    }
    return node
  }

  /**
   * Deletes value from the tree, if count of value is greater than 1, then count just decrements
   * Returns new size of tree
   *
   * Time Complexity: O(log n)
   * Space Complexity: O(log n)
   *
   * @param {number} value
   * @returns {number}
   */
  delete(value) {
    const found = { value: false }
    this.root = this._delete(this.root, value, found)
    if (found.value) this.size--
    return this.size
  }

  /**
   * @private
   * @param {TreeNode} node
   * @param {number} value
   * @param {{ value: boolean }} found
   * @returns {number}
   */
  _delete(node, value, found) {
    if (!node) return null
    if (value === node.value) {
      found.value = true
      if (node.count - 1 > 0) {
        node.decrement()
        return node
      }
      if (!node.left && !node.right) return null
      if (!node.left) return node.right
      if (!node.right) return node.left
      let successor = node.right
      while (successor.left) {
        successor = successor.left
      }
      node.value = successor.value
      node.count = successor.count
      node.right = this._delete(node.right, successor.value)
    } else if (value < node.value) {
      node.left = this._delete(node.left, value)
    } else {
      node.right = this._delete(node.right, value)
    }
    return node
  }

  /**
   * Converts tree to array-like string
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   *
   * @returns {string}
   */
  toString() {
    return `[${this._toString(this.root).join(',')}]`
  }

  /**
   * @private
   * @param {TreeNode} node
   * @param {number[]} array
   * @returns {number[]}
   */
  _toString(node, array = []) {
    if (!node) return array
    this._toString(node.left, array)
    for (let i = 0; i < node.count; i++) {
      array.push(node.value)
    }
    this._toString(node.right, array)
    return array
  }
}
