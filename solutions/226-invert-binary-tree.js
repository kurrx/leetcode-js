/**
 * https://leetcode.com/problems/invert-binary-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) return root
  const left = root.left,
    right = root.right
  root.left = invertTree(right)
  root.right = invertTree(left)
  return root
}
