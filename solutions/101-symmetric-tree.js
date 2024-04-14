/**
 * https://leetcode.com/problems/symmetric-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return isEqualSymmetric(root, root)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 */
function isEqualSymmetric(root1, root2) {
  if (!root1 && !root2) return true
  if (!root1 || !root2) return false
  if (root1.val !== root2.val) return false
  return (
    isEqualSymmetric(root1.left, root2.right) &&
    isEqualSymmetric(root1.right, root2.left)
  )
}
