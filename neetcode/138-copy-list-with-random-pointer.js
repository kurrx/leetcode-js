/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  if (!head) return null
  let curr = head
  while (curr) {
    curr.next = new ListNode(curr.val, curr.next)
    curr = curr.next.next
  }
  curr = head
  while (curr) {
    curr.next.random = curr.random?.next ?? null
    curr = curr.next.next
  }
  const sentinel = new ListNode()
  curr = head
  let newCurr = sentinel
  while (curr) {
    newCurr.next = curr.next
    curr.next = curr.next.next
    newCurr = newCurr.next
    curr = curr.next
  }
  return sentinel.next
}
