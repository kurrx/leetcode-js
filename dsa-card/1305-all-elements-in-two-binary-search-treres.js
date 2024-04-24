/**
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees
 *
 * TC: O(n + m)
 * SC: O(n + m)
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function getAllElements(root1, root2) {
  if (!root1 && !root2) return []

  const answer = [],
    stack1 = [],
    stack2 = []
  let curr1 = root1,
    curr2 = root2

  while (curr1 || curr2 || stack1.length || stack2.length) {
    while (curr1) {
      stack1.push(curr1)
      curr1 = curr1.left
    }
    while (curr2) {
      stack2.push(curr2)
      curr2 = curr2.left
    }

    if (
      !stack2.length ||
      (stack1.length && stack1.at(-1).val <= stack2.at(-1).val)
    ) {
      curr1 = stack1.pop()
      answer.push(curr1.val)
      curr1 = curr1.right
    } else {
      curr2 = stack2.pop()
      answer.push(curr2.val)
      curr2 = curr2.right
    }
  }

  return answer
}
