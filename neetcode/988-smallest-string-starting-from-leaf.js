const A_CODE = 'a'.charCodeAt(0)
/**
 * @param {TreeNode} root
 * @return {string}
 */
function smallestFromLeaf(root) {
  let min = null
  function dfs(node, str) {
    if (!node) return
    str = String.fromCharCode(node.val + A_CODE) + str
    if (!node.left && !node.right) {
      if (min == null || str < min) {
        min = str
      }
      return
    }
    if (node.left) dfs(node.left, str)
    if (node.right) dfs(node.right, str)
  }
  dfs(root, '')
  return min ?? ''
}
