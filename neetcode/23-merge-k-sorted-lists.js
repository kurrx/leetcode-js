/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  function swap(i, j) {
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
  function push(list) {
    heap.push(list)
    // Heapify Up
    let curr = heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (heap[curr].val < heap[parent].val) {
        swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }
  function pop() {
    swap(0, heap.length - 1)
    const minList = heap.pop()
    // Heapify Down
    let curr = 0
    while (curr * 2 + 1 < heap.length) {
      const leftIndex = curr * 2 + 1,
        rightIndex = curr * 2 + 2,
        minIndex =
          rightIndex < heap.length && heap[rightIndex].val < heap[leftIndex].val
            ? rightIndex
            : leftIndex
      if (heap[minIndex].val < heap[curr].val) {
        swap(minIndex, curr)
        curr = minIndex
      } else {
        break
      }
    }
    return minList
  }

  // Lists is empty return empty linked list
  if (!lists.length) return null

  // Build our min heap
  const heap = []
  for (const list of lists) {
    // If current list is empty no need to add it
    if (!list) continue
    push(list)
  }
  // If all lists was empty return empty linked list
  if (!heap.length) return null

  // Merge linked lists
  const sentinel = new ListNode()
  let prev = sentinel
  while (heap.length > 1) {
    // Pop current min list
    let nextMin = pop()
    // Push list to the end of new linked list
    prev.next = nextMin
    prev = prev.next
    // Push next element of current min
    if (nextMin.next) push(nextMin.next)
  }
  prev.next = heap.pop()
  return sentinel.next
}
