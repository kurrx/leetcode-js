/**
 * https://leetcode.com/problems/palindrome-linked-list
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = null,
    curr = slow
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  while (head && prev) {
    if (head.val !== prev.val) {
      return false
    }
    head = head.next
    prev = prev.next
  }

  return true
}
