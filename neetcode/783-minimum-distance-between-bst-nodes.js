/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDiffInBST(root) {
  let prev = null,
    min = Infinity
  function dfs(node) {
    if (node.left) dfs(node.left)
    if (prev != null) min = Math.min(min, node.val - prev)
    prev = node.val
    if (node.right) dfs(node.right)
  }
  dfs(root)
  return min
}
