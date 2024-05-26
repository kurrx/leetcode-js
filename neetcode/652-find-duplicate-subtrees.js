/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
function findDuplicateSubtrees(root) {
  function serialize(node) {
    if (!node) return 'n'
    const left = serialize(node.left)
    const right = serialize(node.right)
    const str = `${node.val};${left};${right}`
    let arr = serialized.get(str)
    if (!arr) {
      serialized.set(str, (arr = []))
    }
    arr.push(node)
    return str
  }
  const serialized = new Map()
  serialize(root)
  const result = []
  for (const [str, nodes] of serialized) {
    if (nodes.length > 1) {
      result.push(nodes[0])
    }
  }
  return result
}
