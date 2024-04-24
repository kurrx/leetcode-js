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
  if (!head || !head.next) {
    return head
  }

  let group = 2,
    curr = head.next,
    prev = head
  while (curr) {
    let savedCurr = curr,
      savedPrev = prev

    let count = 1
    while (curr && count <= group) {
      prev = curr
      curr = curr.next
      count++
    }
    count--

    const sequenceLength = Math.min(count, group)
    if (sequenceLength % 2 === 0) {
      savedPrev.next = reverse(savedCurr, sequenceLength)
      prev = savedCurr
    }
    group++
  }

  return head
}

function reverse(head, count) {
  if (!head || !head.next || count === 0) {
    return head
  }
  let curr = head,
    prev = null,
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
