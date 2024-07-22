class ListNode {
  /**
   * @param {number | null} val
   * @param {ListNode | null} prev
   * @param {ListNode | null} next
   */
  constructor(val = null, prev = null, next = null) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

/**
 * Doubly Linked List
 */
class MyLinkedList {
  constructor() {
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
    this.length = 0
  }

  /**
   * TC: O(n)
   * SC: O(1)
   *
   * @param {number} index
   * @returns {ListNode}
   */
  nodeAt(index) {
    let curr
    if (index < this.length - index - 1) {
      curr = this.head
      for (let i = 0; i <= index; i++) {
        curr = curr.next
      }
    } else {
      curr = this.tail
      for (let i = 0; i <= this.length - index - 1; i++) {
        curr = curr.prev
      }
    }
    return curr
  }

  /**
   * TC: O(n)
   * SC: O(1)
   *
   * @param {number} index
   * @returns {number}
   */
  get(index) {
    if (index < 0 || index >= this.length) return -1
    return this.nodeAt(index).val
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @param {number} val
   */
  addAtHead(val) {
    this.addAtIndex(0, val)
  }

  /**
   * TC: O(1)
   * SC: O(1)
   *
   * @param {number} val
   */
  addAtTail(val) {
    this.addAtIndex(this.length, val)
  }

  /**
   * TC: O(n)
   * SC: O(1)
   *
   * @param {number} index
   * @param {number} val
   */
  addAtIndex(index, val) {
    if (index < 0 || index > this.length) return
    const node = this.nodeAt(index)
    const newNode = new ListNode(val, node.prev, node)
    node.prev.next = newNode
    node.prev = newNode
    this.length++
  }

  /**
   * TC: O(n)
   * SC: O(1)
   *
   * @param {number} index
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return
    const node = this.nodeAt(index)
    node.prev.next = node.next
    node.next.prev = node.prev
    this.length--
  }
}
