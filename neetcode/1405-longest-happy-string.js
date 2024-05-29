/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
function longestDiverseString(a, b, c) {
  function swap(i, j) {
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
  function lt(i, j) {
    if (heap[i][1] === heap[j][1]) {
      return heap[i][0].charCodeAt(0) < heap[j][0].charCodeAt(0)
    }
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
  function getSubstr(char, count, max) {
    const add = Math.min(count, max)
    return [char.repeat(add), count - add]
  }

  const heap = []
  if (a > 0) push(['a', a])
  if (b > 0) push(['b', b])
  if (c > 0) push(['c', c])

  let result = ''
  while (heap.length) {
    const [char1, count1] = pop()
    if (result.at(-1) !== char1) {
      const [sub1, newCount1] = getSubstr(char1, count1, 2)
      result += sub1
      if (newCount1 > 0) push([char1, newCount1])
    } else if (heap.length) {
      const [char2, count2] = pop()
      const [sub2, newCount2] = getSubstr(char2, count2, 1)
      result += sub2
      push([char1, count1])
      if (newCount2 > 0) push([char2, newCount2])
    }
  }
  return result
}
