/**
 * https://leetcode.com/problems/dota2-senate
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  const stack = [],
    queue = senate.split(''),
    counter = { R: 0, D: 0 }
  for (const senator of queue) {
    counter[senator]++
  }
  while (counter.D && counter.R) {
    const senator = queue.shift()
    if (!stack.length || stack.at(-1) === senator) {
      stack.push(senator)
    } else {
      counter[senator]--
      queue.push(stack.pop())
    }
  }
  return counter.D ? 'Dire' : 'Radiant'
}
