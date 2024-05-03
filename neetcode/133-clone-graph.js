/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  if (!node) return node
  const clone = new Node(node.val),
    seen = new Map([[node, clone]]),
    stack = [[node, clone]]
  while (stack.length) {
    const [node, clone] = stack.pop()
    for (const neighbor of node.neighbors) {
      if (!seen.has(neighbor)) {
        const cloneNeighbor = new Node(neighbor.val)
        clone.neighbors.push(cloneNeighbor)
        seen.set(neighbor, cloneNeighbor)
        stack.push([neighbor, cloneNeighbor])
      } else {
        clone.neighbors.push(seen.get(neighbor))
      }
    }
  }
  return clone
}
