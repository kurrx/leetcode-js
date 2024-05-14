/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, k) {
  // Build graph
  const graph = []
  for (let i = 0; i < n; i++) graph.push([])
  for (const [a, b, price] of flights) graph[a].push([b, price])

  // BFS
  const queue = [[0, src]],
    distance = new Array(n).fill(Infinity)
  let stops = 0,
    total
  while (stops <= k && queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [currPrice, currCity] = queue.shift()
      for (const [nei, price] of graph[currCity]) {
        total = currPrice + price
        if (total < distance[nei]) {
          distance[nei] = total
          queue.push([total, nei])
        }
      }
    }
    stops++
  }

  return distance[dst] === Infinity ? -1 : distance[dst]
}
