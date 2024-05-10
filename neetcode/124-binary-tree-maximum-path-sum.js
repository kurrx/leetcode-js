/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
  function dp(node) {
    if (!node) return 0
    const left = Math.max(dp(node.left), 0),
      right = Math.max(dp(node.right), 0)
    max = Math.max(max, left + right + node.val)
    return node.val + Math.max(left, right)
  }
  let max = -Infinity
  dp(root)
  return max
}
