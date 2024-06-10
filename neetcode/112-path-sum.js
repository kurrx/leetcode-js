/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  function dfs(node, sum) {
    sum += node.val
    if (!node.right && !node.left) return sum === targetSum
    let answer = false
    if (node.left) answer ||= dfs(node.left, sum)
    if (!answer && node.right) answer ||= dfs(node.right, sum)
    return answer
  }
  if (!root) return false
  return dfs(root, 0)
}
