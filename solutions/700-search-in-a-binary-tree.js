/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
  let curr = root
  while (curr) {
    if (curr.val === val) return curr
    if (val < curr.val) curr = curr.left
    else if (val > curr.val) curr = curr.right
  }
  return null
}
