/**
 * @param {ListNode} head
 * @return {number}
 */
function pairSum(head) {
  function reverse(node) {
    let prev = null,
      curr = node,
      next
    while (curr) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }

  // Find middle element
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // Reverse second half
  const half = reverse(slow)

  // Find max twin sum
  let p1 = head,
    p2 = half,
    max = 0
  while (p1 && p2) {
    max = Math.max(max, p1.val + p2.val)
    p1 = p1.next
    p2 = p2.next
  }
  // Reverse back second half
  reverse(half)

  return max
}
