/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
  const answer = []
  if (!root) return answer
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    answer.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return answer
}
