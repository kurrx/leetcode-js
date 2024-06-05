/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  if (!head || !head.next) return head
  const sentinel = new ListNode(-1, head)
  let prev = sentinel,
    curr = head,
    next
  while (curr && curr.next) {
    prev.next = curr.next
    next = prev.next.next
    prev.next.next = curr
    curr.next = next
    prev = curr
    curr = next
  }
  return sentinel.next
}
