/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  function getBalance(root, depth = 0) {
    if (!root) return [true, depth]
    const [leftIsBalanced, leftDepth] = getBalance(root.left, depth + 1)
    // Early termination if left node is not balanced no need to check right
    if (!leftIsBalanced) return [false, 0]
    const [rightIsBalanced, rightDepth] = getBalance(root.right, depth + 1)
    if (!rightIsBalanced) return [false, 0]
    // Balance must be -1 (right subtree height is higher by 1),
    //                  1 (left subtree height is higher by 1),
    //                  0 (balanced)
    const balanceOfRoot = leftDepth - rightDepth
    return [
      balanceOfRoot >= -1 && balanceOfRoot <= 1,
      Math.max(leftDepth, rightDepth),
    ]
  }

  const [balanced] = getBalance(root)
  return balanced
}
