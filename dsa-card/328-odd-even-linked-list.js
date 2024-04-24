/**
 * https://leetcode.com/problems/odd-even-linked-list
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
  if (!head || !head.next) {
    return head
  }

  let odd = head,
    even = head.next,
    evenHead = even
  while (even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
}
