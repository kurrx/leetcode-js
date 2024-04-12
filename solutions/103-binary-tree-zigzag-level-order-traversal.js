/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  if (!root) return []
  const queue = [root],
    answer = []
  let fromLeft = true

  while (queue.length) {
    const level = []
    const levelNodes = queue.length
    for (let i = 0; i < levelNodes; i++) {
      const node = queue.shift()
      if (fromLeft) level.push(node.val)
      else level.unshift(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    answer.push(level)
    fromLeft = !fromLeft
  }

  return answer
}
