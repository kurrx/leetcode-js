/**
 * https://leetcode.com/problems/count-number-of-rectangles-containing-each-point
 *
 * TC: O(m*log(n))
 * SC: O(n)
 *
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
function countRectangles(rectangles, points) {
  const m = points.length,
    answer = new Array(m),
    heights = new Map()

  for (const [l, h] of rectangles) {
    if (!heights.has(h)) heights.set(h, [])
    heights.get(h).push(l)
  }

  for (const height of heights.keys()) {
    heights.get(height).sort((a, b) => a - b)
  }

  for (let i = 0; i < m; i++) {
    const [x, y] = points[i]
    let count = 0
    for (let j = y; j <= 100; j++) {
      if (!heights.has(j)) continue
      const arr = heights.get(j)
      let left = 0,
        right = arr.length - 1,
        heightCount = arr.length
      while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (x <= arr[mid]) {
          heightCount = mid
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      count += arr.length - heightCount
    }
    answer[i] = count
  }
  return answer
}
