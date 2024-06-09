/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isCompleteTree(root) {
  const queue = [root]
  let nullNodeFound = false
  while (queue.length) {
    const node = queue.shift()
    if (node == null) {
      nullNodeFound = true
    } else {
      if (nullNodeFound) {
        return false
      }
      queue.push(node.left)
      queue.push(node.right)
    }
  }
  return true
}
