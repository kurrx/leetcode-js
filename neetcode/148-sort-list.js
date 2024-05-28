/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  function merge(p1, p2) {
    if (!p1) return p2
    if (!p2) return p1
    const sentinel = new ListNode()
    let curr = sentinel
    while (p1 || p2) {
      if (p1 && (!p2 || p1.val < p2.val)) {
        curr.next = p1
        p1 = p1.next
      } else {
        curr.next = p2
        p2 = p2.next
      }
      curr = curr.next
    }
    return sentinel.next
  }
  function sort(node) {
    if (!node || !node.next) return node
    let prev = null,
      slow = node,
      fast = node
    while (fast && fast.next) {
      prev = slow
      slow = slow.next
      fast = fast.next.next
    }
    if (prev) prev.next = null
    const firstHalf = sort(node)
    const secondHalf = sort(slow)
    return merge(firstHalf, secondHalf)
  }
  return sort(head)
}
