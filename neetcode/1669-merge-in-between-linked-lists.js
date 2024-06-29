/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeInBetween(list1, a, b, list2) {
  // Find (a-1)th element of list1
  let p1 = list1,
    i = 0,
    beforeRemove,
    afterRemove
  while (p1) {
    if (i === a - 1) beforeRemove = p1
    if (i === b + 1) afterRemove = p1
    p1 = p1.next
    i++
  }
  // Find last element of list2
  let listLast2 = list2
  while (listLast2.next) {
    listLast2 = listLast2.next
  }
  beforeRemove.next = list2
  listLast2.next = afterRemove
  return list1
}
