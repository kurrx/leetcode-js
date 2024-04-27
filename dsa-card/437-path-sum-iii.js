/**
 * https://leetcode.com/problems/path-sum-iii
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
function pathSum(root, targetSum) {
  function traverse(root, sum) {
    if (!root) return 0
    let answer = Number(sum === targetSum)
    sum += root.val
    answer += map.get(sum - targetSum) ?? 0
    map.set(sum, (map.get(sum) ?? 0) + 1)
    if (root.left) answer += traverse(root.left, sum)
    if (root.right) answer += traverse(root.right, sum)
    map.set(sum, map.get(sum) - 1)
    return answer
  }
  const map = new Map()
  return traverse(root, 0)
}
