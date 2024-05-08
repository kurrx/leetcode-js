/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  function dfs(i, from, to) {
    if (i >= n || from > to) return null
    const node = new TreeNode(preorder[i])
    if (from === to) return node
    const j = map.get(preorder[i])
    node.left = dfs(i + 1, from, j - 1)
    node.right = dfs(i + j - from + 1, j + 1, to)
    return node
  }
  const n = preorder.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i)
  }
  return dfs(0, 0, n - 1)
}
