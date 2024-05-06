/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  // Heap utility
  function swap(i, j) {
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
  function heappush(val) {
    heap.push(val)
    let curr = heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (heap[curr] > heap[parent]) {
        swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }
  function heappop() {
    swap(0, heap.length - 1)
    const max = heap.pop()
    heapifyDown(0)
    return max
  }
  function heapifyDown(i) {
    let curr = i
    while (curr * 2 + 1 < heap.length) {
      const leftIndex = curr * 2 + 1,
        rightIndex = curr * 2 + 2,
        maxIndex =
          rightIndex < heap.length && heap[rightIndex] > heap[leftIndex]
            ? rightIndex
            : leftIndex
      if (heap[maxIndex] > heap[curr]) {
        swap(maxIndex, curr)
        curr = maxIndex
      } else {
        break
      }
    }
  }

  // Heapify input
  const n = stones.length,
    heap = [...stones]
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(i)
  }

  // Smash stones
  while (heap.length > 1) {
    const max1 = heappop(),
      max2 = heappop()
    if (max1 !== max2) {
      heappush(max1 - max2)
    }
  }
  return heap.length ? heap[0] : 0
}
