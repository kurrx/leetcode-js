/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return []
  const queue = [root],
    answer = []
  while (queue.length) {
    const length = queue.length
    answer.push(queue.at(-1).val)
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return answer
}
