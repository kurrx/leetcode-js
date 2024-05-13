class UnionFind {
  constructor(size) {
    this.parent = []
    this.rank = []
    this.size = size
    for (let i = 0; i < size; i++) {
      this.parent.push(i)
      this.rank.push(1)
    }
  }

  find(A) {
    // Search
    let root = A
    while (this.parent[root] !== root) root = this.parent[root]
    // Compress Path
    let temp
    while (A !== root) {
      temp = this.parent[A]
      this.parent[A] = root
      A = temp
    }
    return root
  }

  union(A, B) {
    let rootA = this.find(A),
      rootB = this.find(B)
    if (rootA === rootB) return
    if (this.rank[rootA] < this.rank[rootB]) {
      this.parent[rootA] = rootB
      this.rank[rootB] += this.rank[rootA]
    } else {
      this.parent[rootB] = rootA
      this.rank[rootA] += this.rank[rootB]
    }
    this.size--
  }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
  const set = new UnionFind(n)
  for (const [a, b] of edges) set.union(a, b)
  return set.size
}
