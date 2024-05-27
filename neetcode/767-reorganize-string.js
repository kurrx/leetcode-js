/**
 * @param {string} s
 * @return {string}
 */
function reorganizeString(s) {
  // Heap Utils
  function swap(i, j) {
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
  function lt(i, j) {
    return heap[i][1] > heap[j][1]
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

  const freq = new Map()
  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) ?? 0) + 1)
  }

  const heap = []
  for (const entry of freq) {
    push(entry)
  }

  let result = ''
  while (heap.length) {
    const [char1, count1] = pop()
    if (result.at(-1) !== char1) {
      result += char1
      if (count1 > 1) push([char1, count1 - 1])
    } else if (heap.length) {
      const [char2, count2] = pop()
      push([char1, count1])
      result += char2
      if (count2 > 1) push([char2, count2 - 1])
    } else {
      return ''
    }
  }
  return result
}
