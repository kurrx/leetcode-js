/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function flipEquiv(root1, root2) {
  function dfs(node, vals = []) {
    if (!node) return vals
    vals.push(node.val)
    const L = node.left ? node.left.val : -1
    const R = node.right ? node.right.val : -1
    if (L < R) {
      dfs(node.left, vals)
      dfs(node.right, vals)
    } else {
      dfs(node.right, vals)
      dfs(node.left, vals)
    }
    vals.push(null)
    return vals
  }
  const vals1 = dfs(root1)
  const vals2 = dfs(root2)
  if (vals1.length !== vals2.length) return false
  for (let i = 0; i < vals1.length; i++) {
    if (vals1[i] !== vals2[i]) {
      return false
    }
  }
  return true
}
