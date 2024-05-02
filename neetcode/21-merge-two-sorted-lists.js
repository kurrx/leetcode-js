/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  // Both lists are empty return empty list
  if (!list1 && !list2) return null

  // One of the list is empty
  if (!list1) return list2
  if (!list2) return list1

  // Create sentinel node to save head to the new list
  const sentinel = new ListNode()

  // Merge lists
  let curr = sentinel
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1
      list1 = list1.next
    } else {
      curr.next = list2
      list2 = list2.next
    }
    curr = curr.next
  }

  // Exhaust lists
  if (list1) curr.next = list1
  if (list2) curr.next = list2

  // Return new list
  return sentinel.next
}
