class ListNode {
  constructor(key = -1, value = -1, prev = null, next = null) {
    this.key = key
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity
    this.size = 0
    this.map = new Map()
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  moveToTop(key) {
    const node = this.map.get(key)
    // Remove node from current position
    node.prev.next = node.next
    node.next.prev = node.prev
    // Put to the end
    node.next = this.tail
    node.prev = this.tail.prev
    this.tail.prev.next = node
    this.tail.prev = node
    return node
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const head = this.head,
      tail = this.tail
    if (!this.map.has(key)) return -1
    return this.moveToTop(key).value
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const head = this.head,
      tail = this.tail
    if (this.map.has(key)) {
      this.moveToTop(key).value = value
    } else {
      // Put to the end
      const newNode = new ListNode(key, value, this.tail.prev, this.tail)
      this.tail.prev.next = newNode
      this.tail.prev = newNode
      this.map.set(key, newNode)
      this.size++
      if (this.size > this.capacity) {
        // Remove first element if we reached capacity
        const deleteNode = this.head.next
        deleteNode.prev.next = deleteNode.next
        deleteNode.next.prev = deleteNode.prev
        this.map.delete(deleteNode.key)
        this.size--
      }
    }
  }
}
