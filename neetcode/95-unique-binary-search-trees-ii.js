/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  function serialize(root) {
    if (!root) return 'null'
    if (!root.left && !root.right) return String(root.val)
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`
  }
  function clone(root) {
    const cloneRoot = new TreeNode(root.val)
    if (root.left) cloneRoot.left = clone(root.left)
    if (root.right) cloneRoot.right = clone(root.right)
    return cloneRoot
  }
  function insert(root, val) {
    const node = new TreeNode(val)
    let curr = root
    while (curr) {
      if (val < curr.val) {
        if (curr.left) curr = curr.left
        else {
          curr.left = node
          return [root, curr, 'left']
        }
      } else {
        if (curr.right) curr = curr.right
        else {
          curr.right = node
          return [root, curr, 'right']
        }
      }
    }
    return [node, null, 'root']
  }
  function remove(root, nodeParent, side) {
    if (side === 'root') return null
    nodeParent[side] = null
    return root
  }
  function backtrack(root = null, added = new Set()) {
    if (added.size >= n) {
      const key = serialize(root)
      if (!seen.has(key)) {
        seen.add(key)
        answer.push(clone(root))
      }
      return
    }
    for (let val = 1; val <= n; val++) {
      if (added.has(val)) continue
      const [newRoot, nodeParent, side] = insert(root, val)
      added.add(val)
      backtrack(newRoot, added)
      added.delete(val)
      root = remove(newRoot, nodeParent, side)
    }
  }
  const answer = [],
    seen = new Set()
  backtrack()
  return answer
}
