/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
function mostBooked(n, meetings) {
  // Pre-process
  meetings.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  // Utility
  const counter = new Array(n),
    rooms = new Array(n)
  for (let i = 0; i < n; i++) {
    counter[i] = 0
    rooms[i] = i
  }
  const free = new Heap(rooms, (a, b) => a < b)
  const ongoing = new Heap([], (a, b) =>
    a[0] === b[0] ? a[1] < b[1] : a[0] < b[0],
  )

  // Simulate
  let room,
    end,
    popped,
    max = 0
  for (const meeting of meetings) {
    // Release meetings that end before start
    while (ongoing.size && ongoing.peek[0] <= meeting[0]) {
      room = ongoing.pop()[1]
      free.push(room)
    }
    // If we have free rooms take that room, if not delay the meeting
    end = meeting[1]
    if (free.size) {
      room = free.pop()
    } else {
      popped = ongoing.pop()
      room = popped[1]
      end = popped[0] + meeting[1] - meeting[0]
    }
    ongoing.push([end, room])
    counter[room]++
    if (
      counter[room] > counter[max] ||
      (counter[room] === counter[max] && room < max)
    ) {
      max = room
    }
  }
  return max
}

class Heap {
  constructor(arr, comp) {
    this.comp = comp
    this.heap = arr
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i)
    }
  }

  get size() {
    return this.heap.length
  }

  get peek() {
    return this.heap[0]
  }

  lt(i, j) {
    return this.comp(this.heap[i], this.heap[j])
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
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
    const peek = this.heap.pop()
    this.heapifyDown(0)
    return peek
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
