/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
  let fast = head,
    i = 1
  while (i < k) {
    fast = fast.next
    i++
  }
  const first = fast
  let slow = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  ;[first.val, slow.val] = [slow.val, first.val]
  return head
}
