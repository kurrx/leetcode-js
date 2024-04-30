/**
 * Tree BFS Level-Order Traversal
 *
 * Time Complexity: O(nk) Where `k` is work done at each step
 * Space Complexity: O(n)
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function treeLevelOrderBFS(root) {
  if (!root) return 0
  const queue = [root]
  let answer = 0,
    level = 0
  while (queue.length) {
    const length = queue.length
    // Do logic for current level here
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      // Do logic here
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    level++
  }
  return answer
}
