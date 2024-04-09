/**
 * https://leetcode.com/problems/reverse-linked-list-ii
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  if (left === right || !head || !head.next) {
    return head
  }
  const sentinel = new ListNode(-1, head)
  let curr = sentinel,
    position = 0,
    start = null,
    tail = null,
    prev = null
  while (position <= right) {
    if (position === left - 1) {
      start = curr
      tail = curr.next
    }
    if (position === right) {
      tail.next = curr.next
    }
    if (position >= left) {
      const nextNode = curr.next
      if (prev) {
        curr.next = prev
      }
      prev = curr
      curr = nextNode
    } else {
      curr = curr.next
    }
    position++
  }
  start.next = prev
  return sentinel.next
}
