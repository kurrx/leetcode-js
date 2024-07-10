/**
 * @param {TreeNode} root
 * @return {number}
 */
function rob(root) {
  function dfs(node) {
    if (memo.has(node)) return memo.get(node)
    let skip = 0
    let take = node.val
    if (node.left) {
      skip += dfs(node.left)
      if (node.left.left) take += dfs(node.left.left)
      if (node.left.right) take += dfs(node.left.right)
    }
    if (node.right) {
      skip += dfs(node.right)
      if (node.right.left) take += dfs(node.right.left)
      if (node.right.right) take += dfs(node.right.right)
    }
    const answer = Math.max(take, skip)
    memo.set(node, answer)
    return answer
  }
  const memo = new Map()
  return dfs(root)
}
