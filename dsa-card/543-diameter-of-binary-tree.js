/**
 * https://leetcode.com/problems/diameter-of-binary-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  return traverse(root)[0]
}

/**
 * @param {TreeNode} root
 * @returns {[number, number]}
 */
function traverse(root) {
  let max = 0,
    left = 0,
    right = 0
  if (root.left) {
    const [maxLeft, height] = traverse(root.left)
    left = height
    max = Math.max(max, maxLeft)
  }
  if (root.right) {
    const [maxRight, height] = traverse(root.right)
    right = height
    max = Math.max(max, maxRight)
  }
  return [Math.max(max, left + right), Math.max(left, right) + 1]
}
