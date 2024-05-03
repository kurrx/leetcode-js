/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    // Has cycle
    if (slow && fast && slow === fast) {
      return true
    }
  }
  return false
}
