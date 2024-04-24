/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  const sentinel = new ListNode(-1, head)
  let predecessor = sentinel
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next
      }
      predecessor.next = head.next
    } else {
      predecessor = predecessor.next
    }
    head = head.next
  }

  return sentinel.next
}
