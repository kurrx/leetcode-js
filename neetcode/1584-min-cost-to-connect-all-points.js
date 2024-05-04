/**
 * @param {number[][]} points
 * @return {number}
 */
function minCostConnectPoints(points) {
  // Heap helpers
  function swap(i, j) {
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
  function push(edge) {
    heap.push(edge)
    let curr = heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (heap[curr][0] < heap[parent][0]) {
        swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }
  function pop() {
    swap(0, heap.length - 1)
    const min = heap.pop()
    let curr = 0
    while (curr * 2 + 1 < heap.length) {
      const leftIndex = curr * 2 + 1,
        rightIndex = curr * 2 + 2,
        minIndex =
          rightIndex < heap.length && heap[rightIndex][0] < heap[leftIndex][0]
            ? rightIndex
            : leftIndex
      if (heap[minIndex][0] < heap[curr][0]) {
        swap(minIndex, curr)
        curr = minIndex
      } else {
        break
      }
    }
    return min
  }

  // Early exit: If only one node then total cost is 0
  if (points.length <= 1) return 0

  // Prim's Algorithm
  let totalCost = 0
  const n = points.length,
    connected = new Set(),
    heap = [[0, 0]]
  while (connected.size < n) {
    const [cost, i] = pop()
    if (connected.has(i)) continue
    connected.add(i)
    totalCost += cost
    for (let j = 0; j < n; j++) {
      if (j === i || connected.has(j)) continue
      push([
        Math.abs(points[i][0] - points[j][0]) +
          Math.abs(points[i][1] - points[j][1]),
        j,
      ])
    }
  }
  return totalCost
}
