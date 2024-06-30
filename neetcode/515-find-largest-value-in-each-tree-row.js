/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function largestValues(root) {
  if (!root) return []
  let queue = [root]
  const result = []
  while (queue.length) {
    const nextQueue = []
    let max = -Infinity
    for (let i = 0; i < queue.length; i++) {
      max = Math.max(max, queue[i].val)
      if (queue[i].left) nextQueue.push(queue[i].left)
      if (queue[i].right) nextQueue.push(queue[i].right)
    }
    result.push(max)
    queue = nextQueue
  }
  return result
}
