/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
 *
 * TC: O(log(n))
 * SC: O(1)
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (q.val < p.val) {
    const temp = q
    q = p
    p = temp
  }
  let curr = root
  while (curr) {
    if (curr === p || curr === q || (p.val < curr.val && q.val > curr.val)) {
      return curr
    }
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left
      continue
    }
    curr = curr.right
  }
  return curr
}
