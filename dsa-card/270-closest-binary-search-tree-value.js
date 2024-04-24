/**
 * https://leetcode.com/problems/closest-binary-search-tree-value
 *
 * TC: O(log(n))
 * SC: O(1)
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
function closestValue(root, target) {
  let node = root,
    minDiff = Infinity,
    answer = -1
  while (node) {
    const diff = Math.abs(node.val - target)
    if (diff < minDiff) {
      minDiff = diff
      answer = node.val
    } else if (diff === minDiff && node.val < answer) {
      answer = node.val
    }
    if (target < node.val) {
      node = node.left
    } else {
      node = node.right
    }
  }
  return answer
}
