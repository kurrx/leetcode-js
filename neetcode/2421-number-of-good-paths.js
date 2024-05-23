class UnionFind {
  constructor(size) {
    this.parent = []
    this.size = []
    for (let i = 0; i < size; i++) {
      this.parent.push(i)
      this.size.push(1)
    }
  }

  find(A) {
    if (this.parent[A] !== A) this.parent[A] = this.find(this.parent[A])
    return this.parent[A]
  }

  union(A, B) {
    const [rootA, rootB] = [this.find(A), this.find(B)]
    if (rootA === rootB) return false
    if (this.size[rootA] > this.size[rootB]) {
      this.parent[rootB] = rootA
      this.size[rootA] += this.size[rootB]
    } else {
      this.parent[rootA] = rootB
      this.size[rootB] += this.size[rootA]
    }
    return true
  }
}

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
function numberOfGoodPaths(vals, edges) {
  const n = vals.length,
    valWithNodes = new Map(),
    adj = []
  for (let i = 0; i < n; i++) {
    if (!valWithNodes.has(vals[i])) valWithNodes.set(vals[i], [])
    valWithNodes.get(vals[i]).push(i)
    adj.push([])
  }
  for (const [a, b] of edges) {
    adj[a].push(b)
    adj[b].push(a)
  }

  const valuesToNodes = Array.from(valWithNodes),
    set = new UnionFind(n)
  valuesToNodes.sort((a, b) => a[0] - b[0])

  let count = 0
  for (const [val, nodes] of valuesToNodes) {
    for (const node of nodes)
      for (const nei of adj[node])
        if (vals[node] >= vals[nei]) set.union(node, nei)
    const group = new Map()
    for (const node of nodes) {
      const root = set.find(node)
      group.set(root, (group.get(root) ?? 0) + 1)
    }
    for (const size of group.values()) {
      count += Math.floor((size * (size + 1)) / 2)
    }
  }
  return count
}
