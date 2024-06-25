class BSTIterator {
  /**
   * @param {TreeNode} root
   */
  constructor(root) {
    this.iter = this.__inorder(root)
    this.iterNext = this.iter.next()
  }

  *__inorder(node) {
    if (!node) return
    if (node.left) yield* this.__inorder(node.left)
    yield node.val
    if (node.right) yield* this.__inorder(node.right)
  }

  /**
   * @return {number}
   */
  next() {
    if (!this.hasNext()) {
      return undefined
    }
    const value = this.iterNext.value
    this.iterNext = this.iter.next()
    return value
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return !this.iterNext.done
  }
}
