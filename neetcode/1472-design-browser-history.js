class HistoryNode {
  constructor(url, prev = null, next = null) {
    this.url = url
    this.prev = prev
    this.next = next
  }
}

class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.curr = new HistoryNode(homepage)
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.curr.next = new HistoryNode(url, this.curr)
    this.curr = this.curr.next
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    for (let i = 0; i < steps && this.curr.prev; i++) {
      this.curr = this.curr.prev
    }
    return this.curr.url
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    for (let i = 0; i < steps && this.curr.next; i++) {
      this.curr = this.curr.next
    }
    return this.curr.url
  }
}
