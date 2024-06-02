/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function numOfMinutes(n, headID, manager, informTime) {
  const graph = new Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = []
  }
  for (let i = 0; i < manager.length; i++) {
    if (manager[i] === -1) continue
    graph[manager[i]].push(i)
  }
  let totalTime = informTime[headID]
  const stack = [[headID, informTime[headID]]]
  while (stack.length) {
    const [employeeID, timeToInform] = stack.pop()
    for (const subordinateID of graph[employeeID]) {
      const nextTimeToInform = timeToInform + informTime[subordinateID]
      totalTime = Math.max(totalTime, nextTimeToInform)
      stack.push([subordinateID, nextTimeToInform])
    }
  }
  return totalTime
}
