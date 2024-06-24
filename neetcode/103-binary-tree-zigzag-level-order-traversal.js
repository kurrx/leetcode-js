/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  if (!root) return []
  const result = []
  let fromLeft = true,
    queue = [root]
  while (queue.length) {
    const nextQueue = []
    result.push([])
    for (let i = 0; i < queue.length; i++) {
      result.at(-1).push(queue[i].val)
      if (queue[i].left) nextQueue.push(queue[i].left)
      if (queue[i].right) nextQueue.push(queue[i].right)
    }
    if (!fromLeft) result.at(-1).reverse()
    queue = nextQueue
    fromLeft = !fromLeft
  }
  return result
}
