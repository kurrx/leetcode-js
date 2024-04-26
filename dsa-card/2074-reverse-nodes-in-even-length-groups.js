/**
 * https://leetcode.com/problems/reverse-nodes-in-even-length-groups
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseEvenLengthGroups(head) {
  if (!head || !head.next) return head
  let group = 1,
    seen = 0,
    prev = null,
    curr = head
  while (curr) {
    let tail = curr,
      tailPrev = null
    while (tail && seen < group) {
      tailPrev = tail
      tail = tail.next
      seen++
    }
    if (seen % 2 === 0) {
      prev.next = reverseList(curr, seen)
      prev = curr
    } else {
      prev = tailPrev
    }
    curr = tail
    seen = 0
    group++
  }
  return head
}

/**
 * @param {ListNode} head
 * @param {number} count
 * @return {ListNode}
 */
function reverseList(head, count) {
  if (!head || !head.next || !count) return head
  let prev = null,
    curr = head,
    next = null
  while (curr && count) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
    count--
  }
  head.next = next
  return prev
}
