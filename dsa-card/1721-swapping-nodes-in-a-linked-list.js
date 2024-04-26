/**
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
  let i = 1,
    fast = head,
    slow = head
  while (i < k) {
    fast = fast.next
    i++
  }
  const begin = fast
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  const temp = begin.val
  begin.val = slow.val
  slow.val = temp
  return head
}
