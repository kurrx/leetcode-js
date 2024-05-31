/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
  let sum = 0
  if (!root) return sum
  if (root.val >= low && root.val <= high) {
    sum += root.val
    if (low < root.val) {
      sum += rangeSumBST(root.left, low, root.val)
    }
    if (high > root.val) {
      sum += rangeSumBST(root.right, root.val, high)
    }
  } else if (root.val < low) {
    sum += rangeSumBST(root.right, low, high)
  } else {
    sum += rangeSumBST(root.left, low, high)
  }
  return sum
}
