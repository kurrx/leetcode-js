/**
 * @param {TreeNode} root
 * @return {number}
 */
function pseudoPalindromicPaths(root) {
  function toggleVal(val, pairs) {
    if (pairs.has(val)) {
      pairs.delete(val)
    } else {
      pairs.add(val)
    }
  }
  function dfs(node, pairs) {
    if (!node) return 0
    let answer = 0
    toggleVal(node.val, pairs)
    if (node.left) answer += dfs(node.left, pairs)
    if (node.right) answer += dfs(node.right, pairs)
    if (!node.left && !node.right && pairs.size <= 1) answer++
    toggleVal(node.val, pairs)
    return answer
  }
  return dfs(root, new Set())
}
