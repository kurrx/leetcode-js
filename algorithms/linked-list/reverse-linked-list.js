/**
 * Reverses Linked List
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseLinkedList(head) {
  let curr = head,
    prev = null,
    next = null
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
