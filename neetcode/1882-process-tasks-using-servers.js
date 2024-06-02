class Heap {
  constructor(arr, comp) {
    this.heap = arr
    this.comp = comp
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i)
    }
  }

  get size() {
    return this.heap.length
  }

  get top() {
    return this.heap[0]
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  lt(i, j) {
    return this.comp(this.heap[i], this.heap[j])
  }

  push(val) {
    this.heap.push(val)
    let curr = this.size - 1
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
    this.swap(0, this.size - 1)
    const top = this.heap.pop()
    this.heapifyDown(0)
    return top
  }

  heapifyDown(index) {
    let curr = index
    while (2 * curr + 1 < this.size) {
      const left = 2 * curr + 1,
        right = 2 * curr + 2,
        top = right < this.size && this.lt(right, left) ? right : left
      if (this.lt(top, curr)) {
        this.swap(top, curr)
        curr = top
      } else {
        break
      }
    }
  }
}

/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
function assignTasks(servers, tasks) {
  const n = servers.length,
    m = tasks.length
  const free = new Heap(
    servers.map((_, i) => i),
    (a, b) => {
      if (servers[a] === servers[b]) return a < b
      return servers[a] < servers[b]
    },
  )
  const busy = new Heap([], (a, b) => {
    if (a[0] === b[0]) {
      if (servers[a[1]] === servers[b[1]]) {
        return a[1] < b[1]
      }
      return servers[a[1]] < servers[b[1]]
    }
    return a[0] < b[0]
  })
  const answer = new Array(m)
  for (let j = 0; j < m; j++) {
    while (busy.size && busy.top[0] <= j) {
      free.push(busy.pop()[1])
    }
    if (free.size) {
      const server = free.pop()
      answer[j] = server
      busy.push([j + tasks[j], server])
    } else {
      let [time, server] = busy.pop()
      time += tasks[j]
      answer[j] = server
      busy.push([time, server])
    }
  }
  return answer
}
