/**
 * https://leetcode.com/problems/average-of-levels-in-binary-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
  const queue = [root],
    averages = []
  while (queue.length) {
    const length = queue.length
    let sum = 0
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    averages.push(sum / length)
  }
  return averages
}
