/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
function getOrder(tasks) {
  const sorted = tasks.map((t, i) => [...t, i]).sort((a, b) => a[0] - b[0])
  const next = new Heap((a, b) => (a[1] == b[1] ? a[2] - b[2] : a[1] - b[1]))
  const answer = []
  let time = 0,
    task = 0,
    index = 0
  while (task < sorted.length || next.size) {
    if (!next.size && time < sorted[task][0]) {
      time = sorted[task][0]
    }
    while (task < sorted.length && time >= sorted[task][0]) {
      next.push(sorted[task++])
    }
    const processed = next.pop()
    time += processed[1]
    answer[index++] = processed[2]
  }
  return answer
}

class Heap {
  constructor(cmp) {
    this.heap = []
    this.cmp = cmp
  }

  get size() {
    return this.heap.length
  }

  get peek() {
    return this.heap[0]
  }

  lt(i, j) {
    return this.cmp(this.heap[i], this.heap[j]) < 0
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  push(task) {
    this.heap.push(task)
    let curr = this.heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (this.lt(curr, parent)) {
        this.swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }

  pop() {
    this.swap(0, this.heap.length - 1)
    const task = this.heap.pop()
    let curr = 0
    while (2 * curr + 1 < this.heap.length) {
      const leftIndex = 2 * curr + 1,
        rightIndex = 2 * curr + 2,
        minIndex =
          rightIndex < this.heap.length && this.lt(rightIndex, leftIndex)
            ? rightIndex
            : leftIndex
      if (this.lt(minIndex, curr)) {
        this.swap(minIndex, curr)
        curr = minIndex
      } else {
        break
      }
    }
    return task
  }
}
