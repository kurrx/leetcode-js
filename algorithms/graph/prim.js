/**
 * Build Minimum Spanning Tree
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[][]} matrix
 * @returns {number}
 */
function primMST(matrix) {
  /**
   * @param {number[]} keys
   * @param {boolean[]} mstSet
   * @returns {number}
   */
  function minKey(keys, mstSet) {
    let min = Number.MAX_SAFE_INTEGER,
      minIndex = -1
    for (let i = 0; i < n; i++) {
      if (!mstSet[i] && keys[i] < min) {
        min = keys[i]
        minIndex = i
      }
    }
    return minIndex
  }
  const n = matrix.length,
    parent = new Array(n),
    keys = new Array(n),
    mstSet = new Array(n)
  for (let i = 0; i < n; i++) {
    keys[i] = Number.MAX_SAFE_INTEGER
    mstSet[i] = false
  }
  keys[0] = 0
  parent[0] = -1
  for (let edge = 0; edge < n - 1; edge++) {
    let min = Number.MAX_SAFE_INTEGER,
      minIndex = -1
    for (let i = 0; i < n; i++) {
      if (!mstSet[i] && keys[i] < min) {
        min = keys[i]
        minIndex = i
      }
    }
    mstSet[minIndex] = true
    for (let v = 0; v < n; v++) {
      if (
        matrix[minIndex][v] != 0 &&
        !mstSet[v] &&
        matrix[minIndex][v] < keys[v]
      ) {
        parent[v] = minIndex
        keys[v] = matrix[minIndex][v]
      }
    }
  }

  let totalWeight = 0
  for (let i = 1; i < n; i++) {
    totalWeight += matrix[i][parent[i]]
  }
  return totalWeight
}
