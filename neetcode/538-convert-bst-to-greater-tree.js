/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
  if (!root) return root
  let prefix = 0,
    temp
  function dfs(node) {
    if (node.right) dfs(node.right)
    temp = node.val
    node.val += prefix
    prefix += temp
    if (node.left) dfs(node.left)
    return node
  }
  return dfs(root)
}
