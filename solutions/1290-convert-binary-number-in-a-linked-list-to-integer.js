/**
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
  let result = head.val
  while (head.next != null) {
    result = result * 2 + head.next.val
    head = head.next
  }
  return result
}
