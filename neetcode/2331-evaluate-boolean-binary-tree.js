/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function evaluateTree(root) {
  function dfs(node) {
    if (!node.left && !node.right) {
      return !!node.val
    }
    const left = dfs(node.left),
      right = dfs(node.right)
    return node.val === 2 ? left || right : left && right
  }
  return dfs(root)
}
