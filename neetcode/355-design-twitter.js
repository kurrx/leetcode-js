class Tweet {
  /**
   * @param {number} id
   * @param {number} timestamp
   * @param {Tweet|null} next
   */
  constructor(id, timestamp, next = null) {
    this.id = id
    this.timestamp = timestamp
    this.next = next
  }
}

class UserTweets {
  constructor() {
    this.sentinel = new Tweet(-1, -1)
  }

  /**
   * @return {Tweet}
   */
  get head() {
    return this.sentinel.next
  }

  /**
   * @param {number} id
   * @return {void}
   */
  push(id, timestamp) {
    const newNode = new Tweet(id, timestamp, this.sentinel.next)
    this.sentinel.next = newNode
  }
}

class FeedBuilder {
  constructor() {
    this.feed = []
  }

  /**
   * @return {number}
   */
  get size() {
    return this.feed.length
  }

  /**
   * @param {Tweet} tweet
   * @return {void}
   */
  push(tweet) {
    this.feed.push(tweet)
    let curr = this.size - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (this.lt(curr, parent)) {
        this.swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }

  /**
   * @return {Tweet}
   */
  pop() {
    this.swap(0, this.size - 1)
    const old = this.feed.pop()
    let curr = 0
    while (2 * curr + 1 < this.size) {
      const left = 2 * curr + 1,
        right = 2 * curr + 2,
        old = right < this.size && this.lt(right, left) ? right : left
      if (this.lt(old, curr)) {
        this.swap(old, curr)
        curr = old
      } else {
        break
      }
    }
    return old
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {void}
   */
  swap(i, j) {
    const temp = this.feed[i]
    this.feed[i] = this.feed[j]
    this.feed[j] = temp
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {boolean}
   */
  lt(i, j) {
    return this.feed[i].timestamp > this.feed[j].timestamp
  }
}

class Twitter {
  constructor() {
    this.follows = new Map()
    this.tweets = new Map()
    this.timestamp = 0
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if (!this.tweets.has(userId)) this.tweets.set(userId, new UserTweets())
    this.tweets.get(userId).push(tweetId, this.timestamp)
    this.timestamp++
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    const builder = new FeedBuilder()
    if (this.tweets.has(userId)) builder.push(this.tweets.get(userId).head)
    if (this.follows.has(userId))
      for (const followeeId of this.follows.get(userId))
        if (this.tweets.has(followeeId))
          builder.push(this.tweets.get(followeeId).head)
    const answer = []
    while (answer.length < 10 && builder.size) {
      const tweet = builder.pop()
      answer.push(tweet.id)
      if (tweet.next) builder.push(tweet.next)
    }
    return answer
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (!this.follows.has(followerId)) this.follows.set(followerId, new Set())
    this.follows.get(followerId).add(followeeId)
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (!this.follows.has(followerId)) return
    this.follows.get(followerId).delete(followeeId)
  }
}
