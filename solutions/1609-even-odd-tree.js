/**
 * https://leetcode.com/problems/even-odd-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isEvenOddTree(root) {
  const queue = [root]
  let isEven = true,
    prevVal
  while (queue.length) {
    const length = queue.length
    prevVal = isEven ? -Infinity : Infinity
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (isEven) {
        if (node.val <= prevVal) return false
        if (node.val % 2 === 0) return false
      } else {
        if (node.val >= prevVal) return false
        if (node.val % 2 === 1) return false
      }
      prevVal = node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    isEven = !isEven
  }
  return true
}
