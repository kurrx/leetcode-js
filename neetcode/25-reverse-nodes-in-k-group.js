/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  function reverse(node) {
    let prev = null,
      curr = node,
      next,
      i = 0
    while (curr && i < k) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
      i++
    }
    node.next = next
    return [i, prev]
  }

  if (k === 1) return head
  const sentinel = new ListNode(-1, head)
  let prev = sentinel,
    curr = head,
    node,
    reversed = k
  while (curr) {
    ;[reversed, node] = reverse(curr)
    if (reversed !== k) {
      reverse(node)
      break
    }
    prev.next = node
    prev = curr
    curr = curr.next
  }
  return sentinel.next
}
