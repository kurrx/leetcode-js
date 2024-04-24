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
  return sum(root, targetSum, 0, new Map())
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @param {number} currSum
 * @param {Map<number, number>} map
 */
function sum(root, targetSum, currSum, map) {
  if (!root) return 0

  let answer = 0
  currSum += root.val
  if (currSum === targetSum) answer++
  answer += map.get(currSum - targetSum) ?? 0
  map.set(currSum, (map.get(currSum) ?? 0) + 1)
  if (root.left) answer += sum(root.left, targetSum, currSum, map)
  if (root.right) answer += sum(root.right, targetSum, currSum, map)
  map.set(currSum, (map.get(currSum) ?? 1) - 1)
  return answer
}
