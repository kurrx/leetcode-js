/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  let p1 = headA,
    p2 = headB,
    p1Switched = false,
    p2Switched = false
  while (p1 && p2) {
    if (p1 === p2) return p1
    p1 = p1.next
    if (!p1 && !p1Switched) {
      p1 = headB
      p1Switched = true
    }
    p2 = p2.next
    if (!p2 && !p2Switched) {
      p2 = headA
      p2Switched = true
    }
  }
  return null
}
