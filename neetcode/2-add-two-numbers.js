/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const sentinel = new ListNode()
  let p1 = l1,
    p2 = l2,
    prev = sentinel,
    carry = 0,
    sum
  while (p1 || p2 || carry) {
    sum = carry
    if (p1) {
      sum += p1.val
      p1 = p1.next
    }
    if (p2) {
      sum += p2.val
      p2 = p2.next
    }
    prev.next = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    prev = prev.next
  }
  return sentinel.next
}
