/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function timeRequiredToBuy(tickets, k) {
  let time = 0
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i] >= tickets[k]) {
      time += tickets[k] - (i > k ? 1 : 0)
    } else {
      time += tickets[i]
    }
  }
  return time
}
