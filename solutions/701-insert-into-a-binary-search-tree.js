/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree
 *
 * TC: O(log(n))
 * SC: O(1)
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
  const newNode = new TreeNode(val)
  let node = root
  while (node) {
    if (val < node.val) {
      if (!node.left) {
        node.left = newNode
        return root
      } else node = node.left
    } else {
      if (!node.right) {
        node.right = newNode
        return root
      } else node = node.right
    }
  }
  return newNode
}
