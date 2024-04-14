/**
 * https://leetcode.com/problems/leaf-similar-trees
 *
 * TC: O(n + m)
 * SC: O(n + m)
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
  function getLeaves(root) {
    const stack = [root],
      leaves = []
    while (stack.length) {
      const node = stack.pop()
      if (!node.left && !node.right) leaves.push(node.val)
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }
    return leaves
  }

  const leaves1 = getLeaves(root1),
    leaves2 = getLeaves(root2),
    n = leaves1.length

  if (leaves1.length !== leaves2.length) return false

  for (let i = 0; i < n; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false
    }
  }
  return true
}
