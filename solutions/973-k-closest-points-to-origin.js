/**
 * https://leetcode.com/problems/k-closest-points-to-origin
 *
 * TC: O(n*log(k))
 * SC: O(k)
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
  const maxHeap = new Heap(
    [],
    ([x1, y1], [x2, y2]) =>
      Math.sqrt(x2 ** 2 + y2 ** 2) - Math.sqrt(x1 ** 2 + y1 ** 2),
  )
  for (const point of points) {
    maxHeap.push(point)
    if (maxHeap.size() > k) {
      maxHeap.pop()
    }
  }
  return maxHeap.heap
}
