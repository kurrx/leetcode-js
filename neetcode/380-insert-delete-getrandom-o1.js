class RandomizedSet {
  constructor() {
    this.map = new Map()
    this.arr = []
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  insert(value) {
    if (this.map.has(value)) return false
    this.map.set(value, this.arr.length)
    this.arr.push(value)
    return true
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  remove(value) {
    if (!this.map.has(value)) return false
    const lastElement = this.arr.at(-1)
    const index = this.map.get(value)
    this.arr[index] = lastElement
    this.map.set(lastElement, index)
    this.arr.pop()
    this.map.delete(value)
    return true
  }

  /**
   * @return {number}
   */
  getRandom() {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
  }
}
