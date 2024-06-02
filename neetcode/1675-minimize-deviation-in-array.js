/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumDeviation(nums) {
  // Heap Utils
  function swap(i, j) {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
  function lt(i, j) {
    return heap[i] > heap[j]
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
  const heap = []
  let min = Infinity
  for (let num of nums) {
    if (num % 2 === 1) num *= 2
    push(num)
    min = Math.min(min, num)
  }

  let minDeviation = Infinity
  while (heap.length) {
    let num = pop()
    minDeviation = Math.min(minDeviation, num - min)
    if (num % 2 === 0) {
      num /= 2
      push(num)
      min = Math.min(min, num)
    } else {
      break
    }
  }
  return minDeviation
}

// maxDiff = highest - lowest
