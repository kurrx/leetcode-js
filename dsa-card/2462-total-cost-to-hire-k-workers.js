/**
 * https://leetcode.com/problems/total-cost-to-hire-k-workers
 *
 * TC: O((k + m)*log(m))
 * SC: O(m)
 *
 * @param {number[]} costs
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
function totalCost(costs, k, m) {
  const n = costs.length
  const heap = new Heap([], (a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0],
  )

  let left = 0,
    right = n - 1
  while (left < m && right >= n - m && left <= right) {
    heap.push([costs[left], left])
    if (left !== right) {
      heap.push([costs[right], right])
    }
    left++
    right--
  }

  let total = 0
  for (let i = 0; i < k; i++) {
    const [cost, worker] = heap.pop()
    if (left <= right) {
      if (worker < left) {
        heap.push([costs[left], left])
        left++
      } else {
        heap.push([costs[right], right])
        right--
      }
    }
    total += cost
  }
  return total
}
