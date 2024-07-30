/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  if (!head || !head.next) return true
  const firstHalfEnd = endOfFirstHalf(head)
  const secondHalf = reverseLinkedList(firstHalfEnd.next)
  let p1 = head,
    p2 = secondHalf,
    palindrome = true
  while (p2 && palindrome) {
    if (p1.val !== p2.val) palindrome = false
    p1 = p1.next
    p2 = p2.next
  }
  firstHalfEnd.next = reverseLinkedList(secondHalf)
  return palindrome
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function endOfFirstHalf(head) {
  let slow = head,
    fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLinkedList(head) {
  let prev = null,
    curr = head,
    next
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
