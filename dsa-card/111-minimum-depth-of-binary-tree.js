/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  if (!root) return 0
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
