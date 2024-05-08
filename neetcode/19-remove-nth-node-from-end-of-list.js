/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let fast = head,
    i = 0
  while (i < n) {
    fast = fast.next
    i++
  }
  const sentinel = new ListNode(0, head)
  let slow = sentinel
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return sentinel.next
}
