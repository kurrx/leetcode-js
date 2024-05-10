/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  let curr = root
  while (curr) {
    if (p.val < curr.val && q.val < curr.val) curr = curr.left
    else if (p.val > curr.val && q.val > curr.val) curr = curr.right
    else break
  }
  return curr
}
