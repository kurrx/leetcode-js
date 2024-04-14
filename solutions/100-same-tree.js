/**
 * https://leetcode.com/problems/same-tree
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  const stack = [[p, q]]
  while (stack.length) {
    const [t1, t2] = stack.pop()
    if (t1 === null && t2 === null) continue
    if (t1 === null || t2 === null) return false
    if (t1.val !== t2.val) return false
    stack.push([t1.right, t2.right])
    stack.push([t1.left, t2.left])
  }
  return true
}
