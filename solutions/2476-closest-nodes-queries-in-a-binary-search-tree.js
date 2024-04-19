/**
 * https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree
 *
 * TC: O(n*log(m))
 * SC: O(m)
 *
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
function closestNodes(root, queries) {
  function convert(node, arr) {
    if (!node) return arr
    if (node.left) convert(node.left, arr)
    arr.push(node.val)
    if (node.right) convert(node.right, arr)
    return arr
  }

  const n = queries.length,
    answers = new Array(n),
    tree = convert(root, []),
    m = tree.length
  for (let i = 0; i < n; i++) {
    const query = queries[i]
    let smallerMax = -1,
      largerMin = -1,
      left = 0,
      right = m - 1
    while (left < right) {
      const mid = left + Math.floor((right - left + 1) / 2)
      if (query === tree[mid]) {
        left = right = mid
        break
      } else if (query < tree[mid]) {
        right = mid - 1
      } else {
        left = mid
      }
    }
    if (query <= tree[left]) largerMin = tree[left]
    if (query >= tree[left]) smallerMax = tree[left]
    if (query < tree[left] && left > 0 && smallerMax === -1)
      smallerMax = tree[left - 1]
    if (query > tree[left] && left < m - 1 && largerMin === -1)
      largerMin = tree[left + 1]
    answers[i] = [smallerMax, largerMin]
  }
  return answers
}
