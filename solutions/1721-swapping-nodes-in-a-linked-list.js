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
  let length = 0
  let curr = head,
    left = null,
    right = head
  while (curr) {
    length++
    if (left) right = right.next
    if (length === k) left = curr
    curr = curr.next
  }

  if (left && right) {
    const temp = left.val
    left.val = right.val
    right.val = temp
  }

  return head
}
