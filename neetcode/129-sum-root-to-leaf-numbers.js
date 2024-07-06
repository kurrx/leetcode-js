/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
  function dfs(node, num) {
    num = num * 10 + node.val
    if (!node.left && !node.right) {
      answer += num
    }
    if (node.left) {
      dfs(node.left, num)
    }
    if (node.right) {
      dfs(node.right, num)
    }
  }
  let answer = 0
  dfs(root, 0)
  return answer
}
