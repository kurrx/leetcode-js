/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
  if (!root) return []
  const stack = [root],
    answer = []
  while (stack.length) {
    const node = stack.pop()
    answer.push(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  answer.reverse()
  return answer
}
