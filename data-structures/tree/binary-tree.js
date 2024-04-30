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
  }
}

const root = new TreeNode(
  0,
  new TreeNode(1, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(5), new TreeNode(6)),
)
//      0
//    /   \
//   1     2
//  / \   / \
// 3   4 5   6
