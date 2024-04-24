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
  return maxDiameter(root).max
}

/**
 * @param {TreeNode} root
 * @returns {{ path:number; max:number }}
 */
function maxDiameter(root) {
  if (!root) return { path: 0, max: 0 }
  if (!root.left && !root.right) return { path: 1, max: 0 }
  const left = maxDiameter(root.left)
  const right = maxDiameter(root.right)
  const path = Math.max(left.path, right.path) + 1
  const max = Math.max(left.path + right.path, left.max, right.max)
  return { path, max }
}
