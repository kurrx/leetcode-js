/**
 * @param {TreeNode} root
 * @return {number}
 */
function widthOfBinaryTree(root) {
  let queue = [[root, 0]],
    maxWidth = 0
  while (queue.length) {
    const nextQueue = []
    maxWidth = Math.max(maxWidth, queue.at(-1)[1] - queue.at(0)[1] + 1)
    for (let i = 0, x = 0; i < queue.length; i++) {
      if (queue[i][0].left) {
        nextQueue.push([queue[i][0].left, 2 * (queue[i][1] - queue[0][1])])
      }
      if (queue[i][0].right) {
        nextQueue.push([queue[i][0].right, 2 * (queue[i][1] - queue[0][1]) + 1])
      }
    }
    queue = nextQueue
  }
  return maxWidth
}
