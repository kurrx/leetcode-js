// I was lazy to implement hashing function and distribute keys across buckets
class MyHashSet {
  constructor() {
    this.obj = {}
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    this.obj[key] = true
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (!this.contains(key)) {
      return
    }
    delete this.obj[key]
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return key in this.obj
  }
}
