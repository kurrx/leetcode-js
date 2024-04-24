/**
 * https://leetcode.com/problems/path-sum-ii
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
  return sum(root, targetSum, [], [])
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @param {number[]} curr
 * @param {number[][]} answer
 */
function sum(root, targetSum, curr, answer) {
  if (!root) return answer

  curr.push(root.val)

  if (root.val === targetSum && !root.left && !root.right) {
    answer.push(curr.slice(0))
  }

  targetSum -= root.val
  sum(root.left, targetSum, curr, answer)
  sum(root.right, targetSum, curr, answer)

  curr.pop()

  return answer
}
