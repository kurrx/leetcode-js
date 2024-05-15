/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function networkDelayTime(times, n, k) {
  // Heap
  function swap(i, j) {
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
  function lt(i, j) {
    return heap[i][0] < heap[j][0]
  }
  function push(val) {
    heap.push(val)
    let curr = heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (lt(curr, parent)) {
        swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }
  function pop() {
    swap(0, heap.length - 1)
    const top = heap.pop()
    let curr = 0
    while (2 * curr + 1 < heap.length) {
      const left = 2 * curr + 1,
        right = 2 * curr + 2,
        top = right < heap.length && lt(right, left) ? right : left
      if (lt(top, curr)) {
        swap(top, curr)
        curr = top
      } else {
        break
      }
    }
    return top
  }

  const graph = [],
    delays = [],
    heap = []

  // Pre-processing
  for (let i = 0; i < n; i++) {
    graph.push([])
    delays.push(Infinity)
  }

  // Build graph
  for (const [a, b, delay] of times) graph[a - 1].push([b - 1, delay])

  // Dijkstra
  delays[k - 1] = 0
  heap.push([0, k - 1])
  while (heap.length) {
    const [currDelay, node] = pop()
    if (currDelay > delays[node]) continue
    for (const [nei, neiDelay] of graph[node]) {
      const nextDelay = currDelay + neiDelay
      if (nextDelay < delays[nei]) {
        delays[nei] = nextDelay
        push([nextDelay, nei])
      }
    }
  }

  // Find Answer
  let max = 0
  for (const delay of delays) {
    if (delay === Infinity) return -1
    max = Math.max(max, delay)
  }
  return max
}
