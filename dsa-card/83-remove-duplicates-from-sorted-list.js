/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) return head
  let iterator = head
  while (iterator && iterator.next) {
    if (iterator.val === iterator.next.val) {
      iterator.next = iterator.next.next
    } else {
      iterator = iterator.next
    }
  }
  return head
}
