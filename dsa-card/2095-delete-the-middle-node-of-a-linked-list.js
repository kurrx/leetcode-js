/**
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteMiddle(head) {
  if (!head || !head.next) {
    return null
  }

  let slow = head,
    fast = head.next.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  slow.next = slow.next.next
  return head
}
