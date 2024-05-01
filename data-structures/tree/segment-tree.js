/**
 * Build and query segment tree
 *
 * Build Time Complexity: O(n)
 * Query Time Complexity: O(log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function minSegmentTree(arr) {
  /**
   * @param {number} low
   * @param {number} high
   */
  function build(low, high, i) {
    if (low === high) {
      segment[i] = arr[low]
      return
    }
    const mid = Math.floor((low + high) / 2)
    build(low, mid, i * 2 + 1)
    build(mid + 1, high, i * 2 + 2)
    segment[i] = Math.min(segment[i * 2 + 1], segment[i * 2 + 2])
  }
  /**
   * @param {number} qLow
   * @param {number} qHigh
   * @param {number} low
   * @param {number} high
   */
  function query(qLow, qHigh, low, high, i) {
    if (qLow <= low && qHigh >= high) return segment[i]
    if (qLow > high || qHigh < low) return Number.MAX_SAFE_INTEGER
    const mid = Math.floor((low + high) / 2)
    return Math.min(
      query(qLow, qHigh, low, mid, i * 2 + 1),
      query(qLow, qHigh, mid + 1, high, i * 2 + 2),
    )
  }
  const n = arr.length,
    size = 2 * Math.pow(2, Math.ceil(Math.log2(n))) - 1,
    segment = new Array(size).fill(Number.MAX_SAFE_INTEGER)
  build(0, n - 1, 0)
  return segment
}
