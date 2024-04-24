/**
 * https://leetcode.com/problems/house-robber-iii
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function rob(root) {
  function dp(node) {
    if (!node) return 0
    if (memo.has(node)) {
      return memo.get(node)
    }

    const skip = dp(node.left) + dp(node.right)
    const take =
      node.val +
      dp(node.left?.left) +
      dp(node.left?.right) +
      dp(node.right?.left) +
      dp(node.right?.right)
    const answer = Math.max(skip, take)

    memo.set(node, answer)
    return answer
  }
  const memo = new Map()
  return dp(root)
}
