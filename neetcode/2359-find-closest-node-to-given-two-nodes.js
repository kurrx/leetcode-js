/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
function closestMeetingNode(edges, node1, node2) {
  const visited1 = new Map([[node1, 0]])
  let dist1 = 0
  while (node1 !== null) {
    if (edges[node1] !== -1 && !visited1.has(edges[node1])) {
      visited1.set(edges[node1], dist1 + 1)
      node1 = edges[node1]
      dist1++
    } else {
      node1 = null
    }
  }

  const visited2 = new Set()
  let dist2 = 0,
    minMaxDist = Infinity,
    answer = -1
  while (node2 !== null) {
    if (visited1.has(node2)) {
      const dist = Math.max(dist2, visited1.get(node2))
      if (dist < minMaxDist) {
        minMaxDist = dist
        answer = node2
      } else if (dist === minMaxDist && node2 < answer) {
        answer = node2
      }
    }
    if (edges[node2] !== -1 && !visited2.has(edges[node2])) {
      visited2.add(edges[node2])
      node2 = edges[node2]
      dist2++
    } else {
      node2 = null
    }
  }
  return answer
}
