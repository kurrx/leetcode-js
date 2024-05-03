/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  if (!head || !head.next || !head.next.next) return
  // Find middle of linked list
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // Reverse second half
  let prev = null,
    curr = slow,
    next
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  // Merge both halves
  let p1 = head,
    p2 = prev
  while (p2.next) {
    next = p1.next
    p1.next = p2
    p1 = next

    next = p2.next
    p2.next = p1
    p2 = next
  }
}
