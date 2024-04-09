/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const sentinel = new ListNode(-1, head)
  let slow = sentinel,
    fast = sentinel
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return sentinel.next
}
