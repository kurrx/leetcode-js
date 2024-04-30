class ListNode {
  /**
   * @param {number} [value]
   * @param {ListNode} [next]
   */
  constructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}

class SinglyLinkedList {
  constructor() {
    this.sentinel = new ListNode()
    this.length = 0
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
    let curr = this.sentinel
    while (index) {
      curr = curr.next
      index--
    }
    curr.next = new ListNode(value, curr.next)
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
    let curr = this.sentinel.next
    while (index) {
      curr = curr.next
      index--
    }
    return curr.value
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
    let curr = this.sentinel.next
    while (index) {
      curr = curr.next
      index--
    }
    curr.value = value
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
    let curr = this.sentinel
    while (index) {
      curr = curr.next
      index--
    }
    const value = curr.next.value
    curr.next = curr.next.next
    this.length--
    return value
  }

  /**
   * Pushes new value to the end, returns new length of linked list
   *
   * Time Complexity: O(n)
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
   * Time Complexity: O(n)
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
    let index = 0,
      curr = this.sentinel.next
    while (curr) {
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
    this.sentinel.next = null
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
      curr = this.sentinel.next
    while (curr) {
      str += curr.value
      if (curr.next) str += ','
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
