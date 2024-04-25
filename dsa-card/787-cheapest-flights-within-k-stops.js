/**
 * https://leetcode.com/problems/cheapest-flights-within-k-stops
 *
 * TC: O(N+E*K)
 * SC: O(N+E*K)
 *
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, k) {
  const graph = new Array(n),
    prices = new Array(n),
    queue = [[src, 0]]
  for (let i = 0; i < n; i++) {
    graph[i] = []
    prices[i] = Infinity
  }
  for (const [from, to, price] of flights) {
    graph[from].push([to, price])
  }

  let stops = 0
  while (stops <= k && queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [currCity, currTotalPrice] = queue.shift()
      for (const [nextCity, nextPrice] of graph[currCity]) {
        const nextTotalPrice = currTotalPrice + nextPrice
        if (nextTotalPrice < prices[nextCity]) {
          prices[nextCity] = nextTotalPrice
          queue.push([nextCity, nextTotalPrice])
        }
      }
    }
    stops++
  }
  return prices[dst] === Infinity ? -1 : prices[dst]
}
