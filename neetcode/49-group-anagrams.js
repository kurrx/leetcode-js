const a_CODE = 'a'.charCodeAt(0)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map()
  let key,
    counter = Array(26)
  for (const str of strs) {
    counter.fill(0)
    for (let i = 0; i < str.length; i++) {
      counter[str.charCodeAt(i) - a_CODE]++
    }

    key = counter.join(';')
    arr = map.get(key)
    if (!arr) map.set(key, (arr = []))
    arr.push(str)
  }
  return Array.from(map.values())
}
