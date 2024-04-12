/**
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function maxAncestorDiff(root) {
  return dfs(root, root.val, root.val)
}

/**
 * @param {TreeNode} root
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function dfs(root, min, max) {
  if (!root) return max - min
  min = Math.min(min, root.val)
  max = Math.max(max, root.val)
  const left = dfs(root.left, min, max),
    right = dfs(root.right, min, max)
  return Math.max(left, right)
}
