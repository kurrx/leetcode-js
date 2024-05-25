/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
