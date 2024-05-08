/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root || (!root.left && !root.right)) return root
  const right = root.right
  root.right = invertTree(root.left)
  root.left = invertTree(right)
  return root
}
