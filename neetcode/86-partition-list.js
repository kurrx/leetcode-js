/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  const sentinel = new ListNode(-1, head)
  const greaterSentinel = new ListNode(-1)
  let curr = sentinel
  let currGreater = greaterSentinel
  while (curr && curr.next) {
    if (curr.next.val >= x) {
      currGreater.next = curr.next
      currGreater = currGreater.next
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  currGreater.next = null
  curr.next = greaterSentinel.next
  return sentinel.next
}
