/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return []

  const queue = [root],
    levels = []
  while (queue.length) {
    const length = queue.length,
      level = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    levels.push(level)
  }
  return levels
}
