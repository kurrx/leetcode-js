class TreeNode {
  /**
   * @param {number} value
   * @param {TreeNode} left
   * @param {TreeNode} right
   */
  constructor(value = 0, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

/**
 * For all operations (except toString):
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * Adds value to the tree
   *
   * @param {number} value
   * @returns {void}
   */
  add(value) {
    /**
     * @param {TreeNode} node
     * @returns {TreeNode}
     */
    function ADD(node) {
      if (!node) return new TreeNode(value)
      if (value < node.value) {
        node.left = ADD(node.left)
      } else if (value > node.value) {
        node.right = ADD(node.right)
      }
      return node
    }
    this.root = ADD(this.root)
  }

  /**
   * Checks existence of value in tree
   *
   * @param {number} value
   * @returns {boolean}
   */
  has(value) {
    /**
     * @param {TreeNode} node
     * @returns {TreeNode}
     */
    function HAS(node) {
      if (!node) return false
      if (value < node.value) {
        return HAS(node.left)
      } else if (value > node.value) {
        return HAS(node.right)
      }
      return true
    }
    return HAS(this.root)
  }

  /**
   * Deletes value from tree
   *
   * @param {number} value
   * @returns {void}
   */
  delete(value) {
    /**
     * @param {TreeNode} node
     * @returns {TreeNode}
     */
    function DELETE(node, value) {
      if (!node) return node
      if (value < node.value) {
        node.left = DELETE(node.left, value)
      } else if (value > node.value) {
        node.right = DELETE(node.right, value)
      } else {
        if (!node.left && !node.right) return null
        if (!node.left) return node.right
        if (!node.right) return node.left
        let successor = node.right
        while (successor.left) {
          successor = successor.left
        }
        node.value = successor.value
        node.right = DELETE(node.right, successor.value)
      }
      return node
    }
    this.root = DELETE(this.root, value)
  }

  /**
   * Converts tree into array-like string
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   *
   * @returns {string}
   */
  toString() {
    /**
     * @param {TreeNode} node
     * @returns {void}
     */
    function IN_ORDER(node) {
      if (!node) return
      if (node.left) IN_ORDER(node.left)
      arr.push(node.value)
      if (node.right) IN_ORDER(node.right)
    }
    const arr = []
    IN_ORDER(this.root)
    return `[${arr.join(',')}]`
  }
}
