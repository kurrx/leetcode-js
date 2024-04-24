/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
  let maxSum = -Infinity,
    maxLevel = 0,
    level = 1
  const queue = [root]
  while (queue.length) {
    const length = queue.length
    let sum = 0
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (sum > maxSum) {
      maxSum = sum
      maxLevel = level
    }
    level++
  }
  return maxLevel
}
