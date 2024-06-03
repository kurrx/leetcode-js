/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findMinHeightTrees(n, edges) {
  if (n < 2) {
    return Array.from({ length: n }).map((_, i) => i)
  }

  const graph = new Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Set()
  }
  for (const [a, b] of edges) {
    graph[a].add(b)
    graph[b].add(a)
  }

  let leaves = []
  for (let i = 0; i < n; i++) {
    if (graph[i].size === 1) {
      leaves.push(i)
    }
  }

  let remaining = n
  while (remaining > 2) {
    remaining -= leaves.length
    const newLeaves = []
    for (const leaf of leaves) {
      const nei = graph[leaf].values().next().value
      graph[nei].delete(leaf)
      if (graph[nei].size === 1) {
        newLeaves.push(nei)
      }
    }
    leaves = newLeaves
  }
  return leaves
}
