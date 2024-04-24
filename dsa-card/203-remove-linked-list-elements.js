/**
 * https://leetcode.com/problems/remove-linked-list-elements
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  const sentinel = new ListNode(0, head)
  let curr = sentinel
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return sentinel.next
}
