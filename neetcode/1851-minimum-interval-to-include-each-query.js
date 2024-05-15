/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
function minInterval(intervals, queries) {
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

  intervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  queries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0])
  const answer = new Array(queries.length),
    heap = []
  let i = 0
  for (const [q, j] of queries) {
    while (i < intervals.length && intervals[i][0] <= q)
      push([intervals[i][1] - intervals[i][0] + 1, intervals[i++][1]])
    while (heap.length && heap[0][1] < q) pop()
    answer[j] = !heap.length ? -1 : heap[0][0]
  }
  return answer
}
