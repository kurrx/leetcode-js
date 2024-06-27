/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (!root) return root

  // Find required node
  let parent = null,
    parentSide = null,
    curr = root
  while (curr) {
    if (key === curr.val) break
    parent = curr
    if (key > curr.val) {
      parentSide = 'right'
      curr = curr.right
    } else {
      parentSide = 'left'
      curr = curr.left
    }
  }

  // If didn't found it
  if (!curr) return root

  // Replace it with successor if exists right
  if (curr.right) {
    let succ = curr.right
    while (succ.left) succ = succ.left
    curr.val = succ.val
    curr.right = deleteNode(curr.right, curr.val)
    return root
  }

  // Replace it with predecessor if exists left
  if (curr.left) {
    let pred = curr.left
    while (pred.right) pred = pred.right
    curr.val = pred.val
    curr.left = deleteNode(curr.left, curr.val)
    return root
  }

  // Target is leaf node
  // If target node is root node and only node
  if (!parent) return null
  parent[parentSide] = null
  return root
}
