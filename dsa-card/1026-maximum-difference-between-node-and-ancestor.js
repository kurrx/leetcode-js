/**
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function maxAncestorDiff(root) {
  return traverse(root)[0]
}

/**
 * @param {TreeNode} root
 * @returns {[number, number, number]}
 */
function traverse(root) {
  let maxDiff = 0,
    min = root.val,
    max = root.val
  if (root.left) {
    const [leftMaxDiff, leftMin, leftMax] = traverse(root.left)
    maxDiff = Math.max(
      maxDiff,
      leftMaxDiff,
      Math.abs(root.val - leftMin),
      Math.abs(root.val - leftMax),
    )
    min = Math.min(min, leftMin)
    max = Math.max(max, leftMax)
  }
  if (root.right) {
    const [rightMaxDiff, rightMin, rightMax] = traverse(root.right)
    maxDiff = Math.max(
      maxDiff,
      rightMaxDiff,
      Math.abs(root.val - rightMin),
      Math.abs(root.val - rightMax),
    )
    min = Math.min(min, rightMin)
    max = Math.max(max, rightMax)
  }
  return [maxDiff, min, max]
}
