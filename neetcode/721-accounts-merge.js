class DSU {
  constructor(size) {
    this.parent = new Array(size)
    this.size = new Array(size)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }

  find(A) {
    let root = A
    while (this.parent[root] !== root) {
      root = this.parent[root]
    }

    let temp
    while (A !== root) {
      temp = this.parent[A]
      this.parent[A] = root
      A = temp
    }
    return root
  }

  union(A, B) {
    const [rootA, rootB] = [this.find(A), this.find(B)]
    if (rootA === rootB) return
    if (this.size[rootA] >= this.size[rootB]) {
      this.parent[rootB] = rootA
      this.size[rootA] += this.size[rootB]
    } else {
      this.parent[rootA] = rootB
      this.size[rootB] += this.size[rootA]
    }
  }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  const dsu = new DSU(accounts.length),
    emailGroup = new Map()
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      if (!emailGroup.has(accounts[i][j])) {
        emailGroup.set(accounts[i][j], i)
      } else {
        dsu.union(i, emailGroup.get(accounts[i][j]))
      }
    }
  }

  const components = new Map()
  for (const [email, group] of emailGroup) {
    const repr = dsu.find(group)
    if (!components.has(repr)) {
      components.set(repr, [])
    }
    components.get(repr).push(email)
  }

  const merged = []
  for (const [group, component] of components) {
    component.sort()
    component.unshift(accounts[group][0])
    merged.push(component)
  }
  return merged
}
