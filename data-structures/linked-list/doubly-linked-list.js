class ListNode {
  /**
   * @param {number} [value]
   * @param {ListNode} [prev]
   * @param {ListNode} [next]
   */
  constructor(value = 0, prev = null, next = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
    this.length = 0
  }

  /**
   * Gets list node at index, returns null if index is invalid
   *
   * @private
   * @param {number} index
   * @returns {ListNode}
   */
  _nodeAt(index) {
    if (index === this.length) return this.tail
    const left = index,
      right = this.length - index - 1,
      fromLeft = left <= right
    let curr = fromLeft ? this.head.next : this.tail.prev,
      counter = fromLeft ? left : right
    while (counter > 0) {
      curr = fromLeft ? curr.next : curr.prev
      counter--
    }
    return curr
  }

  /**
   * Inserts new value at index, returns new length of linked list
   *
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   *
   * @param {number} index
   * @param {number} value
   * @returns {void}
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return this.length
    const node = this._nodeAt(index)
    const newNode = new ListNode(value, node.prev, node)
    node.prev.next = newNode
    node.prev = newNode
    this.length++
    return this.length
  }

  /**
   * Gets value at index, returns undefined if index is invalid
   *
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   *
   * @param {number} index
   * @returns {number|undefined}
   */
  at(index) {
    if (index < 0 || index >= this.length) return undefined
    return this._nodeAt(index).value
  }

  /**
   * Sets value at index
   *
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   *
   * @param {number} index
   * @param {number} value
   * @returns {void}
   */
  set(index, value) {
    if (index < 0 || index >= this.length) return
    this._nodeAt(index).value = value
  }

  /**
   * Deletes value at index, returns deleted value or undefined if index is invalid
   *
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   *
   * @param {number} index
   * @returns {number|undefined}
   */
  delete(index) {
    if (index < 0 || index >= this.length) return undefined
    const node = this._nodeAt(index)
    node.prev.next = node.next
    node.next.prev = node.prev
    this.length--
    return node.value
  }

  /**
   * Pushes new value to the end, returns new length of linked list
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @param {number} value
   * @returns {number}
   */
  push(value) {
    return this.insert(this.length, value)
  }

  /**
   * Pops value from the end, returns value of popped element or undefined if list is empty
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  pop() {
    return this.delete(this.length - 1)
  }

  /**
   * Unshifts new value to the beginning, returns new length of linked list
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @param {number} value
   * @returns {number}
   */
  unshift(value) {
    return this.insert(0, value)
  }

  /**
   * Shifts value from the beginning, returns value of shifted element or undefined if list is empty
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {number|undefined}
   */
  shift() {
    return this.delete(0)
  }

  /**
   * Searches for target value, returns index of element or -1 if it doesn't exists
   *
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   *
   * @param {number} target
   * @returns {number}
   */
  find(target) {
    let curr = this.head.next,
      index = 0
    while (curr !== this.tail) {
      if (curr.value === target) {
        return index
      }
      curr = curr.next
      index++
    }
    return -1
  }

  /**
   * Clears linked list
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   *
   * @returns {void}
   */
  clear() {
    this.head.next = this.tail
    this.tail.prev = this.head
    this.length = 0
  }

  /**
   * Converts linked list into string
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   *
   * @returns {string}
   */
  toString() {
    let str = '[',
      curr = this.head.next
    while (curr !== this.tail) {
      str += curr.value
      if (curr.next !== this.tail) str += ','
      curr = curr.next
    }
    str += ']'
    return str
  }
}

// Examples
const list = new DoublyLinkedList()
console.log(`Push 1: ${list.push(1)} -> ${list.toString()}`)
console.log(`Push 2: ${list.push(2)} -> ${list.toString()}`)
console.log(`Push 3: ${list.push(3)} -> ${list.toString()}`)
console.log(`Push 4: ${list.push(4)} -> ${list.toString()}`)
console.log(`Pop: ${list.pop()} -> ${list.toString()}`)
console.log(`Unshift 0: ${list.unshift(0)} -> ${list.toString()}`)
console.log(`Shift: ${list.shift()} -> ${list.toString()}`)
console.log(`Insert at 1 -> 2: ${list.insert(1, 2)} -> ${list.toString()}`)
console.log(`Insert at 3 -> 3: ${list.insert(3, 3)} -> ${list.toString()}`)
console.log(`Insert at 10 -> 10: ${list.insert(10, 10)} -> ${list.toString()}`)
console.log(`At 3: ${list.at(3)}`)
console.log(`At 10: ${list.at(10)}`)
list.set(3, 2)
console.log(`Set at 3 -> 2: ${list.toString()}`)
list.set(10, 2)
console.log(`Set at 10 -> 2: ${list.toString()}`)
console.log(`Find 2: ${list.find(2)}`)
console.log(`Find 3: ${list.find(3)}`)
console.log(`Find 10: ${list.find(10)}`)
list.clear()
console.log(`Clear: ${list.toString()}`)
