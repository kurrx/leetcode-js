/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  function maxDiameter(node) {
    if (!node) return [0, 0]
    let max = 0,
      leftHeight = 0,
      rightHeight = 0
    if (node.left) {
      const left = maxDiameter(node.left)
      max = Math.max(max, left[0])
      leftHeight = left[1]
    }
    if (node.right) {
      const right = maxDiameter(node.right)
      max = Math.max(max, right[0])
      rightHeight = right[1]
    }
    return [
      Math.max(max, leftHeight + rightHeight),
      Math.max(leftHeight, rightHeight) + 1,
    ]
  }
  return maxDiameter(root)[0]
}
