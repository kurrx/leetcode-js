class DisjointSet {
  constructor(size) {
    this.parent = []
    this.rank = []
    for (let i = 0; i < size; i++) {
      this.parent.push(i)
      this.rank.push(1)
    }
  }

  find(A) {
    // Step 1: Find root
    let root = A
    while (this.parent[root] !== root) {
      root = this.parent[root]
    }

    // Step 2: Set each node to root
    let old
    while (A !== root) {
      old = this.parent[A]
      this.parent[A] = root
      A = old
    }
    return root
  }

  union(A, B) {
    let rootA = this.find(A),
      rootB = this.find(B)
    if (rootA === rootB) return false
    if (this.rank[rootA] < this.rank[rootB]) {
      this.parent[rootA] = rootB
      this.rank[rootB] += this.rank[rootA]
    } else {
      this.parent[rootB] = rootA
      this.rank[rootA] += this.rank[rootB]
    }
    return true
  }
}
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantConnection(edges) {
  const set = new DisjointSet(edges.length)
  for (const [A, B] of edges) {
    if (!set.union(A - 1, B - 1)) {
      return [A, B]
    }
  }
  return [-1, -1]
}
