/**
 * Fast Slow Pointer
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {number}
 */
function fastSlowPointer(head) {
  let slow = head,
    fast = head,
    answer = 0
  while (fast && fast.next) {
    // Do logic here
    slow = slow.next
    fast = fast.next.next
  }
  return answer
}
