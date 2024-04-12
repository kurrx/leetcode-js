/**
 * https://leetcode.com/problems/deepest-leaves-sum
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function deepestLeavesSum(root) {
  const queue = [root]
  let lastSum = 0
  while (queue.length) {
    lastSum = 0
    const levelNodes = queue.length
    for (let i = 0; i < levelNodes; i++) {
      const node = queue.shift()
      lastSum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return lastSum
}
