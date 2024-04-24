/**
 * https://leetcode.com/problems/delete-leaves-with-a-given-value
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
function removeLeafNodes(root, target) {
  if (root.left) {
    root.left = removeLeafNodes(root.left, target)
  }
  if (root.right) {
    root.right = removeLeafNodes(root.right, target)
  }
  if (!root.left && !root.right && root.val === target) {
    return null
  }
  return root
}
