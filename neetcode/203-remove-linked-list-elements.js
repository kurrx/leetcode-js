/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  const sentinel = new ListNode(-1, head)
  let prev = sentinel,
    curr = head
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
    } else {
      prev = curr
    }
    curr = curr.next
  }
  return sentinel.next
}
