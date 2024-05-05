/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  if (!head || !head.next) return head
  let prev = null,
    curr = head,
    next
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
