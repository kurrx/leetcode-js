/**
 * https://leetcode.com/problems/time-needed-to-inform-all-employees
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function numOfMinutes(n, headID, manager, informTime) {
  const graph = new Map(),
    queue = [[headID, informTime[headID]]]
  for (let id = 0; id < n; id++) {
    if (id === headID) continue
    const managerId = manager[id]
    if (!graph.has(managerId)) {
      graph.set(managerId, [])
    }
    graph.get(managerId).push(id)
  }

  let totalTime = 0
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [id, time] = queue.shift(),
        subordinates = graph.get(id)
      if (time > totalTime) totalTime = time
      if (!subordinates) continue
      for (const subId of subordinates) {
        queue.push([subId, time + informTime[subId]])
      }
    }
  }
  return totalTime
}
