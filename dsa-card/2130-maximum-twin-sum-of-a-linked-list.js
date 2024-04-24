/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {number}
 */
function pairSum(head) {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let curr = slow,
    prev = null
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  let maxSum = 0
  while (head && prev) {
    maxSum = Math.max(maxSum, head.val + prev.val)
    head = head.next
    prev = prev.next
  }
  return maxSum
}
