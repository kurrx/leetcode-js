/**
 * https://leetcode.com/problems/remove-stones-to-minimize-the-total
 *
 * TC: O(k*log(n))
 * SC: O(n)
 *
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
function minStoneSum(piles, k) {
  const maxHeap = new Heap(piles, true)
  let sum = 0
  for (const pile of piles) {
    sum += pile
  }

  for (let i = 0; i < k; i++) {
    const pile = maxHeap.pop(),
      remove = Math.floor(pile / 2)
    maxHeap.push(pile - remove)
    sum -= remove
  }

  return sum
}
