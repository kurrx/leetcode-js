/**
 * Dijkstra Algorithm
 *
 * Time Complexity: O((V+E) log V)
 * Space Complexity: O(V)
 *
 * @param {number[][]} graph
 * @param {number} source
 * @returns {number}
 */
function dijkstra(graph, source, to) {
  const distance = new Array(graph.length).fill(Infinity),
    heap = new Heap((a, b) => a[0] - b[0])
  distance[source] = 0
  heap.push([0, source])
  while (!heap.isEmpty()) {
    const [currDistance, node] = heap.pop()
    if (currDistance > distance[node]) {
      continue
    }
    for (const [neighbor, neighborDistance] of graph[node]) {
      const nextDistance = currDistance + neighborDistance
      if (nextDistance < distance[neighbor]) {
        distance[neighbor] = nextDistance
        heap.push([nextDistance, neighbor])
      }
    }
  }
  return distance[to]
}
