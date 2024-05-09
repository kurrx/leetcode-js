const A = 'A'.charCodeAt(0)
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  const counter = new Array(26).fill(0)
  for (const task of tasks) counter[task.charCodeAt(0) - A]++
  counter.sort((a, b) => a - b)
  const maxFreq = counter[25] - 1
  let idleSlots = maxFreq * n
  for (let i = 24; i >= 0 && counter[i] > 0; i--)
    idleSlots -= Math.min(maxFreq, counter[i])
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length
}
