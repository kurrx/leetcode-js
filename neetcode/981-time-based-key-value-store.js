class TimeMap {
  constructor() {
    this.map = new Map()
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (this.map.has(key)) {
      this.map.get(key).push({ timestamp, value })
    } else {
      this.map.set(key, [{ timestamp, value }])
    }
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    const arr = this.map.get(key)
    if (!arr) return ''
    let left = 0,
      right = arr.length,
      mid
    while (left < right) {
      mid = Math.floor((left + right) / 2)
      if (arr[mid].timestamp > timestamp) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return arr[left - 1]?.value ?? ''
  }
}
