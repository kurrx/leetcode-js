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
    this.height = 1
  }

  /**
   * Updates height according to children and returns it's balance factor
   *
   * @returns {number}
   */
  updateHeight() {
    this.height = 1 + Math.max(this.left?.height ?? 0, this.right?.height ?? 0)
  }

  /**
   * Returns balance of current node
   *
   * @returns {number}
   */
  getBalance() {
    return (this.left?.height ?? 0) - (this.right?.height ?? 0)
  }

  /**
   * Makes left rotation on current node
   *
   * @returns {TreeNode}
   */
  leftRotate() {
    const right = this.right,
      rightLeft = right.left

    // Perform rotation
    right.left = this
    this.right = rightLeft

    // Update heights
    this.updateHeight()
    right.updateHeight()

    // Returns new root
    return right
  }

  /**
   * Makes right rotation on current node
   *
   * @returns {TreeNode}
   */
  rightRotate() {
    const left = this.left,
      leftRight = left.right

    // Perform rotation
    left.right = this
    this.left = leftRight

    // Update heights
    this.updateHeight()
    left.updateHeight()

    // Return new root
    return left
  }
}

/**
 * For all operations (except toString):
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */
class AVLTree {
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
      } else {
        return node
      }

      // Update height of this ancestor node and
      node.updateHeight()

      // Get the balance factor of this ancestor node
      // to check whether this node became unbalanced
      const balance = node.getBalance()

      // Left Left Case
      if (balance > 1 && value < node.left.value) {
        return node.rightRotate()
      }
      // Right Right Case
      if (balance < -1 && value > node.right.value) {
        return node.leftRotate()
      }
      // Left Right Case
      if (balance > 1 && value > node.left.value) {
        node.left = node.left.leftRotate()
        return node.rightRotate()
      }
      // Right Left Case
      if (balance < -1 && value < node.right.value) {
        node.right = node.right.rightRotate()
        return node.leftRotate()
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
        if (!node.left || !node.right) {
          let temp = null
          if (!node.right) temp = node.left
          else temp = node.right
          if (!temp) {
            temp = node
            node = null
          } else {
            node = temp
          }
        } else {
          let successor = node.right
          while (successor.left) {
            successor = successor.left
          }
          node.value = successor.value
          node.right = DELETE(node.right, successor.value)
        }
      }
      if (!node) return node

      // UPDATE HEIGHT OF THE CURRENT NODE
      node.updateHeight()
      // GET THE BALANCE FACTOR OF THIS NODE (to check whether this node became unbalanced)
      const balance = node.getBalance()

      // Left Left Case
      if (balance > 1 && node.left.getBalance() >= 0) {
        return node.rightRotate()
      }
      // Left Right Case
      if (balance > 1 && node.left.getBalance() < 0) {
        node.left = node.left.leftRotate()
        return node.rightRotate()
      }
      // Right Right Case
      if (balance < -1 && node.right.getBalance() <= 0) {
        return node.leftRotate()
      }
      // Right Left Case
      if (balance < -1 && node.right.getBalance() > 0) {
        node.right = node.right.rightRotate()
        return node.leftRotate()
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
