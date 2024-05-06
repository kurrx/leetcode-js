/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  const stack = [[p, q]]
  while (stack.length) {
    const [n1, n2] = stack.pop()
    if (!n1 && !n2) continue
    if (!n1 || !n2) return false
    if (n1.val !== n2.val) return false
    stack.push([n1.right, n2.right])
    stack.push([n1.left, n2.left])
  }
  return true
}
