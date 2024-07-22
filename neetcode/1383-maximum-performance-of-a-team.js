/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
function maxPerformance(n, speed, efficiency, k) {
  function lt(i, j) {
    return heap[i] <= heap[j]
  }
  function swap(i, j) {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
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
        min = right < heap.length && lt(right, left) ? right : left
      if (lt(min, curr)) {
        swap(min, curr)
        curr = min
      } else {
        break
      }
    }
    return top
  }
  const candidates = efficiency
    .map((e, i) => [e, speed[i]])
    .sort((a, b) => b[0] - a[0])
  const heap = []
  let speedSum = 0,
    result = BigInt(0)
  for (const [currEfficiency, currSpeed] of candidates) {
    if (heap.length > k - 1) {
      speedSum -= pop()
    }
    push(currSpeed)
    speedSum += currSpeed
    const currResult = BigInt(speedSum) * BigInt(currEfficiency)
    if (currResult > result) result = currResult
  }
  return result % BigInt(10 ** 9 + 7)
}
