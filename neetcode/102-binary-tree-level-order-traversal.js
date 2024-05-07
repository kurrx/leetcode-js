/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return []
  const answer = [],
    queue = [root]
  while (queue.length) {
    const length = queue.length,
      level = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    answer.push(level)
  }
  return answer
}
