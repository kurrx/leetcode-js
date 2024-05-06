class UnionFind {
  /**
   * @param {number} size
   */
  constructor(size) {
    this.parent = []
    this.rank = []
    for (let i = 0; i < size; i++) {
      this.parent.push(i)
      this.rank.push(1)
    }
  }

  /**
   * @param {number} A
   * @returns {number}
   */
  find(A) {
    if (A < 0 || A >= this.parent.length) return -1
    let root = A
    while (this.parent[root] !== root) {
      root = this.parent[root]
    }

    let old
    while (A !== root) {
      old = this.parent[A]
      this.parent[A] = root
      A = old
    }
    return root
  }

  union(A, B) {
    const rootA = this.find(A),
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
