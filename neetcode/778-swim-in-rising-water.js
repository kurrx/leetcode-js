const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]
/**
 * @param {number[][]} grid
 * @return {number}
 */
function swimInWater(grid) {
  // Heap Utils
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
  function canVisit(r, c, id) {
    return r >= 0 && r < n && c >= 0 && c < n && !visited.has(id)
  }

  const n = grid.length,
    visited = new Set([0]),
    heap = [[grid[0][0], 0, 0]]
  while (heap.length) {
    const [minMaxHeight, r, c] = pop()
    if (r === n - 1 && c === n - 1) return minMaxHeight
    for (const [dy, dx] of DIRS) {
      const nextR = r + dy,
        nextC = c + dx,
        nextId = nextR * n + nextC
      if (canVisit(nextR, nextC, nextId)) {
        visited.add(nextId)
        push([Math.max(minMaxHeight, grid[nextR][nextC]), nextR, nextC])
      }
    }
  }
  return n * n
}
