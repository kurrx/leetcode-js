/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
  function identical(node1, node2) {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false
    return (
      node1.val === node2.val &&
      identical(node1.left, node2.left) &&
      identical(node1.right, node2.right)
    )
  }
  function traverse(node) {
    if (!node) return false
    if (node.val === subRoot.val) {
      if (identical(node, subRoot)) {
        return true
      }
    }
    return traverse(node.left) || traverse(node.right)
  }
  return traverse(root)
}
