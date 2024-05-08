class DetectSquares {
  constructor() {
    this.map = new Map()
  }

  /**
   * @param {number[]} point
   * @return {void}
   */
  add([x, y]) {
    let mapper = this.map.get(x)
    if (!mapper) {
      mapper = new Map()
      this.map.set(x, mapper)
    }
    mapper.set(y, (mapper.get(y) ?? 0) + 1)
  }

  /**
   * @param {number[]} point
   * @return {number}
   */
  count([x1, y1]) {
    if (!this.map.has(x1)) return 0
    const yCoords = this.map.get(x1)
    let count = 0,
      length,
      next
    for (const [y2, yCount] of yCoords) {
      if (y1 === y2) continue
      length = Math.abs(y1 - y2)
      for (const dx of [-1, 1]) {
        next = this.map.get(dx * length + x1)
        if (next && next.has(y1) && next.has(y2)) {
          count += yCount * next.get(y1) * next.get(y2)
        }
      }
    }
    return count
  }
}
