/**
 * @param {TreeNode} root
 * @return {number}
 */
function goodNodes(root) {
  function dfs(node, max) {
    if (!node) return
    if (node.val >= max) count++
    max = Math.max(max, node.val)
    if (node.left) dfs(node.left, max)
    if (node.right) dfs(node.right, max)
  }
  let count = 0
  dfs(root, -Infinity)
  return count
}
