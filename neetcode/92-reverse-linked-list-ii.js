/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  if (left === right) return head
  const sentinel = new ListNode(-1, head)
  let prev = sentinel,
    curr = sentinel.next,
    i = 1,
    next,
    savedPrev,
    savedCurr
  while (i <= right) {
    if (i >= left) {
      if (i === left) {
        savedPrev = prev
        savedCurr = curr
      }
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    } else {
      prev = curr
      curr = curr.next
    }
    i++
  }
  savedPrev.next = prev
  savedCurr.next = curr
  return sentinel.next
}
