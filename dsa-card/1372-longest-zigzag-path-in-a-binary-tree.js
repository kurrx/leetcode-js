/**
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function longestZigZag(root) {
  function zigZag(node, dir, steps) {
    if (!node) return
    maxPath = Math.max(maxPath, steps)

    const next = dir ? node.left : node.right
    if (next) zigZag(next, !dir, steps + 1)

    const opposite = dir ? node.right : node.left
    if (opposite) zigZag(opposite, dir, 1)
  }

  let maxPath = 0
  zigZag(root, true, 0)
  zigZag(root, false, 0)
  return maxPath
}
