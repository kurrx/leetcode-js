/**
 * https://leetcode.com/problems/top-k-frequent-words
 *
 * TC: O(n*log(k))
 * SC: O(k)
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  const freq = new Map(),
    heap = new Heap([], (a, b) => {
      const freqA = freq.get(a),
        freqB = freq.get(b)
      if (freqA === freqB) {
        if (a > b) return -1
        else if (a < b) return 1
        else return 0
      }
      return freqA - freqB
    })

  for (const word of words) {
    freq.set(word, (freq.get(word) ?? 0) + 1)
  }

  for (const word of freq.keys()) {
    heap.push(word)
    if (heap.size() > k) {
      heap.pop()
    }
  }

  const answer = []
  while (!heap.isEmpty()) {
    answer.push(heap.pop())
  }

  answer.reverse()

  return answer
}
