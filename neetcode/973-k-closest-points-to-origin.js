/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
  function swap(i, j) {
    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }
  function partition(low, high) {
    let i = low - 1,
      pivot = copy[high][2]
    for (let j = low; j < high; j++) {
      if (copy[j][2] < pivot) {
        i++
        swap(i, j)
      }
    }
    swap(i + 1, high)
    return i + 1
  }
  function select(low, high) {
    const pivot = partition(low, high)
    if (pivot === k - 1) return pivot
    else if (pivot > k - 1) return select(low, pivot - 1)
    else return select(pivot + 1, high)
  }

  const n = points.length,
    copy = []
  for (const [x, y] of points) copy.push([x, y, Math.sqrt(x ** 2 + y ** 2)])

  const right = select(0, n - 1)
  for (let i = 0; i <= right; i++) copy[i].pop()
  return copy.slice(0, right + 1)
}
